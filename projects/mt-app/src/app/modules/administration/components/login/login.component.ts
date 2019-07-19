import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/login.model';
import { AuthService } from '../../../../common/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: LoginModel = new LoginModel();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }


  onSubmit() {
    console.log(this.model);
    this.authService.logIn(this.model.login, this.model.password);
    this.router.navigateByUrl('/dashboard');
  }
}
