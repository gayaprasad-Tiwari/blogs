import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class CanActivateAddEdit implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate( ): boolean{
      if (this.authService.getToken()){
          return true;
      }else{
          this.router.navigate(['log-in']);
          return false;
      }
  }
}
