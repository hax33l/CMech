import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from "rxjs/operators";
import { Router } from '@angular/router';

export interface LoginForm {
  email: string;
  password: string;
}

export interface User {
  nickname?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private router: Router,
    ) { }

  login(loginForm: LoginForm) {  
    return this.http.post<any>('http://127.0.0.1:8000/api/login', {email: loginForm.email, password: loginForm.password}).pipe(
      map(({ token , user}) => {
        localStorage.setItem('user-token', token);
        localStorage.setItem('nickname', user.nickname);
        return user.role;
      })
    )
  }

  logout() {
    if( localStorage.getItem('workshop_id') )
      localStorage.removeItem('workshop_id');
    localStorage.removeItem('user-token');
    localStorage.removeItem('nickname');
  }

  register(user: User) {
    return this.http.post<any>('http://127.0.0.1:8000/api/register', user).pipe(
      map(user => user)
    )
  }

  isLoggedIn() {
    if (localStorage.getItem('user-token'))
      return true;
    return false;
  }

  getToken() {
    return (localStorage.getItem('user-token') || '{}');
  }

  getNickname() {
    return localStorage.getItem('nickname');
  }
}
