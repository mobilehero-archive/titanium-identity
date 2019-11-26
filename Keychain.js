const identity = require('ti.identity');
const KeychainItemNotFoundError = require('./KeychainItemNotFound');
const teamId = Ti.App.Properties.getString('team-id', Alloy.CFG['team-id'] || 'TEAMID');

export default class Keychain {
	constructor(identifier) {
		this.identifier = identifier;
		this.keychainItem = identity.createKeychainItem({
			identifier:  identifier,
			accessGroup: `${teamId}.${Ti.App.id}`,
		});
	}
	load() {
		// eslint-disable-next-line promise/avoid-new
		return new Promise((resolve, reject) => {
			this.keychainItem.fetchExistence(e => {
				if (e.exists) {
					this.keychainItem.addEventListener('read', e => {
						if (!e.success) {
							reject(null);
						}
						// Return the value
						resolve(e.value);
					});
					this.keychainItem.read();
				} else {
					reject(new KeychainItemNotFoundError('Keychain does not exist.'));
				}
			});
		});
	}

	save(value) {
		// eslint-disable-next-line promise/avoid-new
		return new Promise((resolve, reject) => {
			this.keychainItem.fetchExistence(e => {
				this.keychainItem.addEventListener('save', e => {
					if (!e.success) {
						reject(null);
					}
					// Return the value
					resolve(e.value);
				});
				if (e.exists) {
					this.keychainItem.update(value);
				} else {
					this.keychainItem.save(value);
				}
			});
		});
	}

	reset() {
		this.keychainItem.reset();
	}

}

Keychain.KeychainItemNotFoundError = KeychainItemNotFoundError;
module.exports = Keychain;
