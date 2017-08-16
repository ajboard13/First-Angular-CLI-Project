import { error } from 'util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn': '' }
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public authService: AuthService, private router: Router) {

  }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.authService.af.auth.createUserWithEmailAndPassword(
        formData.value.email, 
        formData.value.password).then((success) => {
        console.log(success);
        this.router.navigate(['']);
      }).catch((err) => {
        console.log(err);
        this.error = err;
      });
    }
  }

}
