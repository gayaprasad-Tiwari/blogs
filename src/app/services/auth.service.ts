import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUser } from '../models/user';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('token');
  }

  logIn(email: string, password: string): Observable<IUser> {
    const url = `${this.BASE_URL}login`;
    return this.http.post<IUser>(url, {email, password});
  }

  signUp(payload:IUser): Observable<IUser> {
    const url = `${this.BASE_URL}register`;
    return this.http.post<IUser>(url, {...payload});
  }
}
