import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable, of } from 'rxjs';
import {map, catchError} from 'rxjs/operators'
@Injectable({
    providedIn: 'root'
})
export class CanActivateAddEdit implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate( ): Observable<any>{
    return this.authService.token.pipe(map(e => {
        if (e) {
            return true;
        }
    }),
    catchError(() => {
        this.router.navigate(['log-in']);
        return of(false);
    })
     )
      
  }
}
