import { retry } from 'rxjs/operator/retry';
import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthProvider, AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(public af : AngularFireAuth) { }

  loginWithGoogle() {
    return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFb() {
    return this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginWithEmailAndPassword(email, password) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.af.auth.signOut();
  }

}


