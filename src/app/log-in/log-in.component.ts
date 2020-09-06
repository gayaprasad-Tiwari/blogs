import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUser } from '../models/user';
import { AppState } from '../models/store/app.state';
import { LogIn } from '../store/actions/auth.actions';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  myElement = document.querySelector('login-element');
  constructor(private store: Store<AppState>){}
  login(data){
    this.store.dispatch(new LogIn(data.detail));
  }
  ngOnInit(): void {}
}
