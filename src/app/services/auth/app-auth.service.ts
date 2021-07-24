import { Injectable } from '@angular/core';
import { AngularFireAuth }  from '@angular/fire/auth'
import { auth } from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';
import { Xliff } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AppAuthService {
  private authUser: any;
  private authState: any;
  private loggedInUser = false;
  private userToken = '';

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  login(){
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    this.loggedInUser = true;

    if(this.loggedInUser){
      this.afAuth.currentUser.getIdToken(true)
    }

    this.afAuth.authState.subscribe((auth) =>{
      this.authState = auth;
    })

    this.router.navigate(['/profile']);
  }

  isLoggedInUser(){
    if(this.userToken != '') return true;
    else return false;
  }

  logout(){
    this.afAuth.auth.signOut();
    this.loggedInUser = false;
    this.userToken = '';
  }
}
