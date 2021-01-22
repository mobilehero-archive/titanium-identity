export default class KeychainItemNotFound extends Error {
	constructor(message) {
	  super(message);
	  this.name = `KeychainItemNotFound`;
	}

	toJSON() {

		return {
		  error: {
				name:       this.name,
				message:    this.message,
				stacktrace: this.stack.split(`\n`),
		  },
		};
	}
}
module.exports = KeychainItemNotFound;
