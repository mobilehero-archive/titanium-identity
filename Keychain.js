const identity = require('ti_identity');
const KeychainItemNotFound = require('./KeychainItemNotFound');
const teamId = Ti.App.Properties.getString('AppTeamId', Alloy.CFG.AppTeamId || 'TEAMID');

export default class Keychain {
	constructor(identifier) {
		this.identifier = identifier;
		this.keychainItem = identity.createKeychainItem({
			identifier:  identifier,
			accessGroup: `${teamId}.${Ti.App.Id}`,
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
					reject(new KeychainItemNotFound('Keychain does not exist.'));
				}
			});
		});
	}

	save(value) {
		this.keychainItem.fetchExistence(e => {
			if (e.exists) {
				this.keychainItem.update(value);
			} else {
				this.keychainItem.save(value);
			}
		});
	}

	reset() {
		this.keychainItem.reset();
	}

}

module.exports = Keychain;
