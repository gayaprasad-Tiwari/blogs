import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import {
    AuthActionTypes,
    LogIn, LogInSuccess, LogInFailure, SignUp, SignUpSuccess, SignUpFailure,
    LogOut

} from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

    constructor(
        private actions: Actions,
        private authService: AuthService,
        private router: Router,
    ) { }
    @Effect()
    LogIn: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN),
        map((action: LogIn) => action.payload),
        switchMap(payload => {
            return this.authService.logIn(payload.email, payload.password).pipe(
                map((user) => {
                    return new LogInSuccess({ token: user.accessToken, email: payload.email });
                }),
                catchError((error) => {
                    alert(error.error);
                    return of(new LogInFailure({ error }));
                })
            );
        })
    );

    @Effect({ dispatch: false })
    LogInSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_SUCCESS),
        tap((user) => {
            localStorage.setItem('token', JSON.stringify(user.payload.token));
            this.authService.getToken();
           this.router.navigateByUrl('/');
        })
    );
    @Effect({ dispatch: false })
    LogInFailure: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_FAILURE)
    );

    @Effect()
    SignUp: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.SIGNUP),
        map((action: SignUp) => action.payload),
        switchMap(payload => {
            return this.authService.signUp(payload).pipe(
                map((user) => {
                    return new SignUpSuccess({ token: user.accessToken, email: payload.email });
                }),
                catchError((error) => {
                    alert(error.error)
                    return of(new SignUpFailure({ error }));
                })
            );
        })
    );

    @Effect({ dispatch: false })
    SignUpSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.SIGNUP_SUCCESS),
        tap((user) => {
            localStorage.setItem('token', JSON.stringify(user.payload.token));
            this.authService.getToken();
            this.router.navigateByUrl('/');
        })
    );
    @Effect({ dispatch: false })
    SignUpFailure: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.SIGNUP_FAILURE)
    );
    @Effect({ dispatch: false })
    public LogOut: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGOUT),
        tap(() => {
            localStorage.removeItem('token');
            this.authService.getToken();
            location.href = '/';
        })
    );
}
