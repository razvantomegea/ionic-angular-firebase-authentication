// Angular
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Ionic
import {
  AlertController,
  IonicPage,
  Loading,
  LoadingController,
  NavController,
  NavParams
} from 'ionic-angular';

// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@IonicPage({
  name: 'forgot-password'
})
@Component({
  templateUrl: 'forgot-password.html'
})
export class ForgotPasswordPage {
  private _history: string;
  public forgotPasswordForm: FormGroup;
  public email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(
    private _afAuth: AngularFireAuth,
    private _alertCtrl: AlertController,
    private _loadCtrl: LoadingController,
    private _navCtrl: NavController,
    private _params: NavParams
  ) {
    this._history = this._params.get('history');
    this.forgotPasswordForm = new FormGroup({
      email: this.email
    });
  }

  public login(): void {
    this._navCtrl.setRoot('login', {
      history: this._history
    })
  }

  public reqestReset(): void {
    const loader: Loading = this._loadCtrl.create({
      content: 'Please wait...',
      duration: 30000,
      spinner: 'crescent'
    });
    loader.present();
    this._afAuth.auth.sendPasswordResetEmail(this.forgotPasswordForm.get('email').value.trim())
      .then(() => {
        loader.dismiss();
        this._alertCtrl.create({
          title: 'Request sent',
          subTitle: 'An email with a password reset link has been sent',
          message: 'Go to your email inbox, follow the instructions, and change the password of your account.',
          buttons: [{
            text: 'OK',
            handler: () => {
              this._navCtrl.push('login');
            }
          }]
        }).present();
      })
      .catch((err: firebase.FirebaseError) => {
        loader.dismiss();
        this._alertCtrl.create({
          title: 'Uhh ohh...',
          subTitle: 'Something went wrong',
          message: err.message,
          buttons: ['OK']
        }).present();
      });
  }
}
