import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../models/store/app.state';
import { LogOut } from '../store/actions/auth.actions';
import { ThemeService } from '../services/theme.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  theme = 'ligth';
  constructor(private store: Store<AppState>, private authService: AuthService, public themeService: ThemeService) { }
  isloggedin = false;
  ngOnInit(): void {
    this.authService.token.subscribe((data) => {
      if (data) {
        this.isloggedin = true;
      } else {
        this.isloggedin = false;
      }
    });
  }
  logOut(): void {
    this.store.dispatch(new LogOut());
  }
  changeTheme() {
    if (this.theme === 'ligth') {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }
  }
}
