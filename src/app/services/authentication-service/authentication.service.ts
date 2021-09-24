import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, tap } from "rxjs/operators";

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

  constructor(private http: HttpClient) { }

  login(loginForm: LoginForm) {  

    return this.http.post<any>('http://127.0.0.1:8000/api/login', {email: loginForm.email, password: loginForm.password}).pipe(
      map(({ token }) => {
        console.log('token');
        localStorage.setItem('user-token', token);
        return token;
      })
    )
  }

  logout() {
    localStorage.removeItem('user-token');
  }

  register(user: User) {
    return this.http.post<any>('http://127.0.0.1:8000/api/register', user).pipe(
      tap(user => console.log(user)),
      map(user => user)
    )
  }
}
