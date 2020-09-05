import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import {
   blogActionType,Load,Insert, LoadSuccess, InsertSuccess, LoadSingleSuccess, EditSuccess, DeleteSuccess
} from '../actions/blog.action';
import { IBlog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog-service.service';

@Injectable()
export class BlogEffects {
    constructor(
        private actions: Actions,
        private router: Router,
        private blogService:BlogService
    ) { }
    
    @Effect()
    Load: Observable<any> = this.actions.pipe(
        ofType(blogActionType.LOAD),
        switchMap(() => {
            return this.blogService.blogList().pipe(
                map((blog:IBlog[]) => { 
                    return new LoadSuccess({blog});
                }),
                catchError((error) => {
                    console.log(error);
                    return error //of(new SignUpFailure({ error: error }));
                })
            )
        })
    )
    @Effect()
    LoadSingle: Observable<any> = this.actions.pipe(
        ofType(blogActionType.LOAD_SINGLE),
        switchMap((id) => {
            return this.blogService.blog(id).pipe(
                map((blog) => { 
                    return new LoadSingleSuccess(blog);
                }),
                catchError((error) => {
                    console.log(error);
                    return error //of(new SignUpFailure({ error: error }));
                })
            )
        })
    )

    @Effect()
    insert: Observable<any> = this.actions.pipe(
        ofType(blogActionType.INSERT),
        switchMap((payload) => {
            return this.blogService.addList(payload).pipe(
                map((blog:IBlog[]) => {
                    console.log(blog);
                    return new InsertSuccess(blog);
                }),
                catchError((error) => {
                    console.log(error);
                    return error //of(new SignUpFailure({ error: error }));
                })
            )
        })
    )
    @Effect()
    edit: Observable<any> = this.actions.pipe(
        ofType(blogActionType.Edit),
        switchMap((payload) => {
            return this.blogService.editList(payload).pipe(
                map((blog:IBlog[]) => {
                    console.log(blog);
                    return new EditSuccess(blog);
                }),
                catchError((error) => {
                    console.log(error);
                    return error //of(new SignUpFailure({ error: error }));
                })
            )
        })
    )
    @Effect()
    deleteBlog: Observable<any> = this.actions.pipe(
        ofType(blogActionType.DELETE),
        switchMap((payload) => {
            return this.blogService.deleteBlog(payload).pipe(
                map((blog) => {
                    console.log(blog);
                    return new DeleteSuccess(blog);
                }),
                catchError((error) => {
                    console.log(error);
                    return error //of(new SignUpFailure({ error: error }));
                })
            )
        })
    )
 

}