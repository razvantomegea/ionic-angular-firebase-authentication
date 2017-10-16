# Full authentication system cross-platform app
## Prerequisites
- [Node.js](https://nodejs.org/en/);
- [Ionic and Cordova](http://ionicframework.com/getting-started/);
- [Android studio](https://developer.android.com/studio/index.html);
- [Visual Studio Code](https://code.visualstudio.com/).

## Getting started
1. Create a new [Firebase project](http://console.firebase.google.com/);
2. Get Firebase config credentials by clicking *Add Firebase to your webb app* and put them in the FIREBASE_CONFIG object inside *src/app/app.module.ts* file
3. Click *Authentication* in your Firebase Console, click the *Sign-in method* tab, and enable *Email/Password* provider.

## Running in browser
```
$ ionic serve
```

## Running on Android
```
$ cordova platform add android
$ cordova run android --device
```

## Running on Windows
```
$ npm run pack:win
```
