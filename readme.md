[//]: # (header-start)

<h1 align="center">
	<a href="https://blog.axway.com/mobile-apps/changes-to-application-development-services">
		Preparing for end of Axway
	</a>	
</h1>
<h2 align="center">
	👇 &nbsp; support for Amplify Cloud and Mobile   &nbsp; 👇
</h2>	

<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		<img src="https://cdn.secure-api.org/images/RIP-Axway-Amplify-Titanium.png" alt="RIP Axway Amplify Titanium (2010 - 2022)" width="80%" />
	</p>
</a>	
<p align="center">
	<a href="https://blog.axway.com/mobile-apps/changes-to-application-development-services">
			🪦 &nbsp; RIP Axway Amplify Titanium (2010 - 2022)
	</a>
</p>
<p align="center">
	<a href="https://blog.axway.com/mobile-apps/prepare-your-apps-for-appcelerator-end-of-support">
			🪦 &nbsp; RIP Axway Amplify Cloud Services (2012 - 2022)
	</a>
</p>
<p align="center">
	<a href="https://blog.axway.com/mobile-apps/prepare-your-apps-for-appcelerator-end-of-support">
			🪦 &nbsp; RIP Axway Amplify Crash Analytics (2015 - 2022)
	</a>
</p>

<hr>
<h4 align="center">
🛑 &nbsp;&nbsp; <a href="https://blog.axway.com/mobile-apps/prepare-your-apps-for-appcelerator-end-of-support">Axway support for Amplify products has ended</a> for most products related to mobile and cloud. 
</h4>

<h4 align="center">
A few of the open-source versions of Axway Amplify products will live on after <a href="">Axway Amplify End-of-Life</a> (EOL) announcements.  However, all closed-source projects and most open-source projects are now dead.  
	</h4>

<p>&nbsp;</p>

> 👉 &nbsp;&nbsp; A group of Axway employees, ex-Axway employees, and some developers from Titanium community have created a legal org and now officially decide all matters related to future of these products.  

<p>&nbsp;</p>
<hr>


## API FAQ:

* [API Best Practices](https://brenton.house)
* [What is API Security?](https://brenton.house/what-is-api-security-5ca8117d4911)
* [OWASP Top 10 List for API Security](https://www.youtube.com/watch?v=GLVHDj0Cpg4)
* [What is API Security?](https://brenton.house/what-is-api-security-5ca8117d4911)
* [Top API Trends for 2022](https://brenton.house/top-10-api-integration-trends-for-2022-49b05f2ef299)
* [What is a Frankenstein API?](https://brenton.house/what-is-a-frankenstein-api-4d6e59fca6)
* [What is a Zombie API?](https://brenton.house/what-is-a-zombie-api-6e5427c39b6a)
* [API Developer Experience](https://brenton.house/keys-to-winning-with-an-awesome-api-developer-experience-62dd2fa668f4)
* [API Cybersecurity 101](https://brenton.house/what-is-api-security-5ca8117d4911)
* [YouTube API Videos](https://youtube.com/brentonhouse)
* [YouTube API Shorts Videos](https://youtube.com/apishorts)

&nbsp;

[![Click to watch on Youtube](https://img.youtube.com/vi/GLVHDj0Cpg4/0.jpg)](https://www.youtube.com/watch?v=GLVHDj0Cpg4&list=PLsy9MwYlG1pew6sktCAIFD5tbrXy9HUQ7  "Click to watch on YouTube")


> &nbsp; [↑ Watch video on YouTube ↑](https://www.youtube.com/watch?v=GLVHDj0Cpg4&list=PLsy9MwYlG1pew6sktCAIFD5tbrXy9HUQ7)

&nbsp;



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