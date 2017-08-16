import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  animations: [moveIn()],
  host: { '[@moveIn]': '' }
})
export class LoginPageComponent implements OnInit {

  error: any;
  constructor(public authService: AuthService, private router: Router) {
    this.authService.af.authState.subscribe(auth => {
      if (auth) {
        this.router.navigate(['']);
      }
    });
  }

  ngOnInit() {
  }

  loginGoogle() {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['']);
    }).catch((err) => {
      this.error = err;
    });
  }

  loginFb() {
    this.authService.loginWithFb().then((data) => {
      this.router.navigate(['']);
    }).catch((err) => {
      this.error = err;
    });
  }

}
