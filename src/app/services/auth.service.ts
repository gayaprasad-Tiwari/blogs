import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import {environment} from '../../environments/environment';
import { IUser } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) {}
  public token = new BehaviorSubject<string>(null);
  getToken():void {
    this.token.next(localStorage.getItem('token'));
  }

  logIn(email: string, password: string): Observable<IUser> {
    const url = `${this.BASE_URL}login`;
    return this.http.post<IUser>(url, {email, password});
  }

  signUp(payload: IUser): Observable<IUser> {
    const url = `${this.BASE_URL}register`;
    return this.http.post<IUser>(url, {...payload});
  }
}
