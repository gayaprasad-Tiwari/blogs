import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../models/store/app.state';
import { LogOut } from '../store/actions/auth.actions';
import { ThemeService } from '../services/theme.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  theme="ligth" 
  constructor( private store: Store<AppState>, public themeService: ThemeService,) { }
  ngOnInit(): void{}
  logOut(): void {
    this.store.dispatch(new LogOut);
  }
  changeTheme(){
    if(this.theme=='ligth'){
      this.themeService.setLightTheme();
    } else{
      this.themeService.setDarkTheme();
    }
  }
}
