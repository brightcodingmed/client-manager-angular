import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.signIn(this.user)
        .then(() => this.router.navigate(['/']))
        .catch(err => console.log(err))
  }

   loginGoogle() {
     this.authService.signInwithGoogle()
         .then(() => this.router.navigate(['/']))
         .catch(() => this.router.navigate(['/register']));

   }


}
