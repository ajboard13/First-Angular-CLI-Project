import { Component } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';﻿

import { Router } from '@angular/router';

import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;


  items: FirebaseListObservable<any[]>;

  constructor(private db : AngularFireDatabase, public authService: AuthService, private router: Router) {
    this.items = db.list('/items');
    
    this.authService.af.authState.subscribe(
      (auth) => {
        if (auth == null){
          //not logged in
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        }else {
          //logged in
          this.isLoggedIn = true;
          this.user_displayName = authService.af.auth.currentUser.displayName;
          this.user_email = authService.af.auth.currentUser.email;
          this.router.navigate(['']);
        }
      }
    )
  }
}
