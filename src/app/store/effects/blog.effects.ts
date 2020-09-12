import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import {
    blogActionType, Load, Insert, LoadSuccess, InsertSuccess,
    LoadSingleSuccess, EditSuccess, DeleteSuccess, LoadFailure,
    LoadSingleFailure, InsertFailure, EditFailure, DeleteFailure
} from '../actions/blog.action';
import { IBlog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog-service.service';

@Injectable()
export class BlogEffects {
    constructor(
        private actions: Actions,
        private router: Router,
        private blogService: BlogService
    ) { }

    @Effect()
    Load: Observable<any> = this.actions.pipe(
        ofType(blogActionType.LOAD),
        switchMap(() => {
            return this.blogService.blogList().pipe(
                map((blog: IBlog[]) => {
                    return new LoadSuccess({ blog });
                }),
                catchError((error) => {
                    alert(error.error);
                    return of(new LoadFailure(error));
                })
            );
        })
    );
    @Effect({ dispatch: false })
    LoadFailure: Observable<any> = this.actions.pipe(
        ofType(blogActionType.LOAD_FAILURE)
    );
    @Effect()
    LoadSingle: Observable<any> = this.actions.pipe(
        ofType(blogActionType.LOAD_SINGLE),
        switchMap((id) => {
            return this.blogService.blog(id).pipe(
                map((blog) => {
                    return new LoadSingleSuccess(blog);
                }),
                catchError((error) => {
                    alert(error.error);
                    return of(new LoadSingleFailure(error));
                })
            );
        })
    );
    @Effect({ dispatch: false })
    LoadSingleFailure: Observable<any> = this.actions.pipe(
        ofType(blogActionType.LOAD_SINGLE_FAILURE)
    );
    @Effect()
    insert: Observable<any> = this.actions.pipe(
        ofType(blogActionType.INSERT),
        switchMap((payload) => {
            return this.blogService.addList(payload).pipe(
                map((blog: IBlog) => {
                    return new InsertSuccess(blog);
                }),
                catchError((error) => {
                    alert(error.error);
                    return of(new InsertFailure(error));
                })
                );
        })
    );
    @Effect({ dispatch: false })
    InsertFailure: Observable<any> = this.actions.pipe(
        ofType(blogActionType.INSERT_FAILURE)
    );
    @Effect()
    edit: Observable<any> = this.actions.pipe(
        ofType(blogActionType.Edit),
        switchMap((payload) => {
            return this.blogService.editList(payload).pipe(
                map((blog: IBlog[]) => {
                    return new EditSuccess(blog);
                }),
                catchError((error) => {
                    alert(error.error);
                    return of(new EditFailure(error));
                })
            );
        })
    );
    @Effect({ dispatch: false })
    EditFailure: Observable<any> = this.actions.pipe(
        ofType(blogActionType.DELETE_FAILURE)
    );
    @Effect()
    deleteBlog: Observable<any> = this.actions.pipe(
        ofType(blogActionType.DELETE),
        switchMap((payload) => {
            return this.blogService.deleteBlog(payload).pipe(
                map((blog) => {
                    return new DeleteSuccess(blog);
                }),
                catchError((error) => {
                    alert(error.error);
                    return of(new DeleteFailure( error ) );
                })
            );
        })
    );
    @Effect({ dispatch: false })
    DeleteFailure: Observable<any> = this.actions.pipe(
        ofType(blogActionType.DELETE_FAILURE)
    );
}
