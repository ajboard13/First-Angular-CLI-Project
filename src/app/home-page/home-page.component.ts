import { audit } from 'rxjs/operator/audit';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../providers/auth.service';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class HomePageComponent implements OnInit {
  name: any;
  state: string = '';

  constructor(public authService: AuthService, private router: Router) { 
    this.authService.af.authState.subscribe(auth => {
      if(auth) {
        this.name = auth.displayName;
      }
    });
  }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    console.log('logged out')
    this.router.navigate(['login']);
    
  }

}
