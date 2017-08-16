import { CanActivate, Router } from '@angular/router';
import { retry } from 'rxjs/operator/retry';
import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthProvider, AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private af: AngularFireAuth, private router: Router) { }

    canActivate(): Observable<boolean> {
        return Observable.from(this.af.authState).take(1).map(state => !!state).do(authenticated => {
            if (!authenticated) {
                this.router.navigate(['login']);
            }
        })
    }
}