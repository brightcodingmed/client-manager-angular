import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  createUser() {
    this.authService.createAccount(this.user)
        .then(() => this.router.navigate(['/login']))
        .catch((err) => console.error(err))
  }

}
