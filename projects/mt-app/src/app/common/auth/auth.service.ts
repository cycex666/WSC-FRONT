import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'projects/mt-app/src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) { }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  logIn(login: string, password: string): any {
    environment.avoidAuth = true;
  }
}
