import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  createAccount(user) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  signIn(user) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
  }

  signInwithGoogle() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }

  isAuthenticated() {
    return this.afAuth.user;
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }

}
