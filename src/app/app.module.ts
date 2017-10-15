// Angular
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';

// Ionic
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// Ionic Native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import 'firebase/storage';

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyD-0RVTMySCqjOsuB7sjJTCf_D0mqOyW6g',
  authDomain: 'simple-auth-rt.firebaseapp.com',
  databaseURL: 'https://simple-auth-rt.firebaseio.com',
  projectId: 'simple-auth-rt',
  storageBucket: 'simple-auth-rt.appspot.com',
  messagingSenderId: '493605566568'
};

// App
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG, 'Simple auth'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
