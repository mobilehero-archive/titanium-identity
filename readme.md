[//]: # (header-start)

<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<h1 align="center">
	🪦 RIP Axway Amplify Titanium (2010 - 2022)
	</h1>
</a>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		<img src="https://cdn.secure-api.org/images/RIP-Axway-Amplify-Titanium.png" alt="RIP Axway Amplify Titanium (2010 - 2022)" width="80%" />
	</p>
</a>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		🪦 &nbsp; RIP Axway Amplify Titanium (2010 - 2022)
	</p>
</a>
<p>&nbsp;</p>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<h2 align="center">
		🛑 This project is no longer being maintained 🛑
	</h2>
</a>
<p>&nbsp;</p>
<hr>
<p>&nbsp;</p>
<p>&nbsp;</p>

[//]: # (header-end)[//]: # (header-start)

<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<h1 align="center">
	🪦 RIP Axway Amplify Titanium (2010 - 2022)
	</h1>
</a>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		<img src="https://cdn.secure-api.org/images/RIP-Axway-Amplify-Titanium.png" alt="RIP Axway Amplify Titanium (2010 - 2022)" width="80%" />
	</p>
</a>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		🪦 &nbsp; RIP Axway Amplify Titanium (2010 - 2022)
	</p>
</a>
<p>&nbsp;</p>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<h2 align="center">
		🛑 This project is no longer being maintained 🛑
	</h2>
</a>
<p>&nbsp;</p>
<hr>
<p>&nbsp;</p>
<p>&nbsp;</p>

[//]: # (header-end)





# @titanium/identity

[![@titanium/identity](https://img.shields.io/npm/v/@titanium/identity.png)](https://www.npmjs.com/package/@titanium/identity)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=brentonhouse/titanium-identity)](https://dependabot.com)

> Native modules that allows you to use Fingerprint authentication, Keychain Access and Face authentication (iOS) with Axway Titanium.

* [📝 Description](#-description)
* [🚀 Getting Started](#-getting-started)
* [✨Features](#features)
* [📚Learn More](#learn-more)
* [📣 Feedback](#-feedback)
* [©️ Legal](#️-legal)


## 📝 Description

This is a repackaging of the compiled iOS and Android modules for [Ti.Identity](https://github.com/appcelerator-modules/titanium-identity) to allow for installation via npm.

## 🚀 Getting Started

1. Install `@titanium/identity` in root of project

```bash
npm install @titanium/identity
```

2. Using Keychain feature

```JavaScript
const Keychain = require('@titanium/identity/Keychain');
const usernameKeychain = new Keychain('username');
const passwordKeychain = new Keychain('password');

// saving values
usernameKeychain.save('my-username');
passwordKeychain.save('my-password');

// Loading values
passwordKeychain.load()
	.then(value => {
		const password = value;
		Authentication.authenticate({ username, password });
	})
	.catch(require('@titanium/identity/KeychainItemNotFound'), error => {
		console.error('KeychainItemNotFound error in passwordKeychain.load()');
		console.error(error);

	})
	.catch(error => {
		console.error('A different error has occurred in passwordKeychain.load()');
		console.error(error);
	});


// resetting values
usernameKeychain.reset();
passwordKeychain.reset();


```


## ✨Features

iOS: `ti.identity 3.0.0`
Android: `ti.identity 3.0.3`

* [x] Use the Fingerprint sensor of your device to authenticate
* [x] Use the Face detection API's of your device to authenticate (iOS 11+)
* [x] Store, read, update and delete items with the native keychain


## 📚Learn More

- [Ti.Identity GitHub Repo](https://github.com/appcelerator-modules/titanium-identity)

## 📣 Feedback

Have an idea or a comment?  [Join in the conversation here](https://github.com/brentonhouse/titanium-identity/issues)! 

## ©️ Legal

Modules are licensed under Apache 2.0 from https://github.com/appcelerator-modules/titanium-identity

Alloy is developed by Appcelerator and the community and is Copyright © 2012-Present by Appcelerator, Inc. All Rights Reserved.

Alloy is made available under the Apache Public License, version 2. See their license file for more information.

Appcelerator is a registered trademark of Appcelerator, Inc. Titanium is a registered trademark of Appcelerator, Inc. Please see the LEGAL information about using trademarks, privacy policy, terms of usage and other legal information at http://www.appcelerator.com/legal.