// Angular
import { Component } from '@angular/core';

// Ionic
import { Platform } from 'ionic-angular';

// Ionic-Native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage: string = 'registration';
  constructor(
    private _platform: Platform,
    private _splashScreen: SplashScreen,
    private _statusBar: StatusBar
  ) {
    this._initializeApp();
  }

  private _initializeApp(): void {
    this._platform.ready().then(() => {
      this._statusBar.styleDefault();
      this._splashScreen.hide();
    });
  }
}

