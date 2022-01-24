[//]: # (header-start)


<h1 align="center">
	<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
		Axway Amplify End-of-Life Announcement
	</a>	
</h1>
<h2 align="center">
	👇 &nbsp; See API FAQ below  &nbsp; 👇
</h2>	


<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		<img src="https://cdn.secure-api.org/images/RIP-Axway-Amplify-Titanium.png" alt="RIP Axway Amplify Titanium (2010 - 2022)" width="80%" />
	</p>
</a>	
<p align="center">
	<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
			🪦 &nbsp; RIP Axway Amplify Titanium (2010 - 2022)
	</a>
</p>
<p align="center">
	<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
			🪦 &nbsp; RIP Axway Amplify Cloud Services (2012 - 2022)
	</a>
</p>

<hr>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<h4 align="center">
🛑 &nbsp;&nbsp; All products affected by the announcements will not be supported by Axway effective their EOL dates in 2022.
</h4>

<h4 align="center">
Some Open-Source versions of Axway products will live on after End-of-Life (EOL) Axway Amplify product announcements.  However, some products are closed-source and will NOT continue after the shut down in 2022.  
	</h4>
</a>
<p>&nbsp;</p>

> 👉 &nbsp;&nbsp; Stay tuned for more info as plans are being made to save the Titanium project and move it under the control of a independent group of developers.

<p>&nbsp;</p>
<hr>

## API FAQ:

* [API Best Practices](https://brenton.house)
* [What is API Security?](https://brenton.house/what-is-api-security-5ca8117d4911)
* [Top API Trends for 2022](https://brenton.house/top-10-api-integration-trends-for-2022-49b05f2ef299)
* [What is a Frankenstein API?](https://brenton.house/what-is-a-frankenstein-api-4d6e59fca6)
* [What is a Zombie API?](https://brenton.house/what-is-a-zombie-api-6e5427c39b6a)
* [API Developer Experience](https://brenton.house/keys-to-winning-with-an-awesome-api-developer-experience-62dd2fa668f4)
* [API Cybersecurity 101](https://brenton.house/what-is-api-security-5ca8117d4911)
* [YouTube API Videos](https://youtube.com/brentonhouse)
* [YouTube API Shorts Videos](https://youtube.com/apishorts)



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