import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import firebase from "firebase/compat";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private user : Observable<firebase.User | null>;
  // private authState: Observable<firebase.User | null>;
  // private userDetails: firebase.User;
  // private userEmail: string | null;
  // private userId: string;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    // this.user = angularFireAuth.authState;
    // this.authState = this.angularFireAuth.authState;
    // this.user.subscribe(
    //   (user : any) => {
    //     if (user) {
    //       this.userDetails = user;
    //       this.userEmail = this.userDetails.email;
    //       this.userId = this.userDetails.uid;
    //       this.loggedIn();
    //
    //     }
    //   }
    // );
  }

  loggedIn() {
    if (localStorage.getItem('user') != null) {
      return  false;
    }
    else {
      return false;
    }
  }

  logout() {
    // this.angularFireAuth.signOut()
    //   .then((res) => this.router.navigate(['']));

  }
}
