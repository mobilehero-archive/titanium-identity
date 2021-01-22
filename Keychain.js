const identity = require(`ti.identity`);
const KeychainItemNotFoundError = require(`./KeychainItemNotFound`);
const teamId = Ti.App.Properties.getString(`team-id`, Alloy.CFG[`team-id`] || `TEAMID`);

export default class Keychain {
	constructor(identifier) {
		this.identifier = identifier;
		this.keychainItem = identity.createKeychainItem({
			identifier,
			accessGroup: `${teamId}.${Ti.App.id}`,
		});
	}
	load() {
		// eslint-disable-next-line promise/avoid-new
		return new Promise((resolve, reject) => {
			this.keychainItem.fetchExistence(e => {
				console.debug(`keychainItem.exists: ${JSON.stringify(e, null, 2)}`);
				if (e.exists) {
					const { keychainItem } = this;
					this.keychainItem.addEventListener(`read`, function onRead(e)  {
						// console.debug(`keychainItem.read: ${JSON.stringify(e, null, 2)}`);
						keychainItem.removeEventListener(`read`, onRead);
						if (!e.success) {
							return reject(new Error(`Error reading keychainItem`));
						}
						// Return the value
						return resolve(e.value);
					});
					this.keychainItem.read();
				} else {
					reject(new KeychainItemNotFoundError(`Keychain does not exist.`));
				}
			});
		});
	}

	save(value) {
		// eslint-disable-next-line promise/avoid-new
		return new Promise((resolve, reject) => {
			this.keychainItem.fetchExistence(e => {
				console.debug(`keychainItem.exists: ${JSON.stringify(e, null, 2)}`);
				const { keychainItem } = this;
				if (e.exists) {
					this.keychainItem.addEventListener(`update`, function onUpdate(e) {
						// console.debug(`keychainItem.update: ${JSON.stringify(e, null, 2)}`);
						keychainItem.removeEventListener(`update`, onUpdate);
						if (!e.success) {
							return reject(new Error(`Error updating keychainItem`));
						}
						// Return the value
						return resolve(e.value);
					});
					this.keychainItem.update(value);
				} else {
					this.keychainItem.addEventListener(`save`, function onSave(e) {
						// console.debug(`keychainItem.save: ${JSON.stringify(e, null, 2)}`);
						keychainItem.removeEventListener(`save`, onSave);
						if (!e.success) {
							return reject(new Error(`Error saving keychainItem`));
						}
						// Return the value
						return resolve(e.value);
					});
					this.keychainItem.save(value);
				}
			});
		});
	}

	reset() {
		// eslint-disable-next-line promise/avoid-new
		return new Promise((resolve, reject) => {
			const { keychainItem } = this;
			this.keychainItem.addEventListener(`reset`, function onReset(e)  {
				// console.debug(`keychainItem.reset: ${JSON.stringify(e, null, 2)}`);
				keychainItem.removeEventListener(`reset`, onReset);
				if (!e.success) {
					return reject(new Error(`Error resetting keychainItem`));
				}
				// Resolve promise
				return resolve();
			});
			this.keychainItem.reset();
		});
	}

}

Keychain.KeychainItemNotFoundError = KeychainItemNotFoundError;
module.exports = Keychain;
