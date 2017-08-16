import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { moveIn, fallIn } from '../router.animations';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public authService: AuthService, private router: Router) { 
    this.authService.af.authState.subscribe(auth =>{
      if (auth) {
        this.router.navigate(['']);
      }
    });
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.authService.loginWithEmailAndPassword(formData.value.email, formData.value.password).then(
        (success) => {
          console.log(success);
          this.router.navigate(['']);
        }
      ).catch((err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

}
