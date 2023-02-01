import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
//import { auth } from 'firebase/app/';
import firebase from 'firebase/compat/app';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buy-and-sell';

  constructor(
    public angularFireAuth: AngularFireAuth,
  ) { }

  signInClicked(): void {
    this.angularFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signOutClicked(): void {
    this.angularFireAuth.signOut();
  }
}
