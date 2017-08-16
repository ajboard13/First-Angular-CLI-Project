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
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;


  items: FirebaseListObservable<any[]>;

  constructor(private db : AngularFireDatabase, public authService: AuthService, private router: Router) {
    this.items = db.list('/items');
    
  
  }
}
