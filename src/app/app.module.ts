import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { firebaseConfig } from './../environments/firebase.config';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { AuthService } from './providers/auth.service';
import { AuthGuard } from './providers/auth.guard';
import { HomePageComponent } from './home-page/home-page.component'
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login-email', component: EmailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    EmailComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule ,
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
