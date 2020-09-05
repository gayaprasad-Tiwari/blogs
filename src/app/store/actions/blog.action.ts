import { Action } from '@ngrx/store';
import { IBlog } from '../../models/blog'
import { BlogState } from '../../models/blog-state';

export enum blogActionType {
    INSERT = '[blog] insert',
    Edit ='[blog] Edit',
    LOAD ='[blog] load',
    LOAD_SUCCESS ='[blog] Load Success',
    INSERT_SUCCESS ='[blog] Insert Success',
    LOAD_SINGLE ='[blog] Load Single',
    LOAD_SINGLE_SUCCESS='[blog] Load Single Success',
}

export class Insert implements Action{
    readonly type = blogActionType.INSERT;
    constructor(public payload:any){}
}

export class Edit implements Action{
    readonly type = blogActionType.Edit;
    constructor(public payload:any){}
}

export class Load implements Action{
    readonly type = blogActionType.LOAD;
    constructor(){}
} 
export class LoadSuccess implements Action{
    readonly type = blogActionType.LOAD_SUCCESS;
    constructor(public payload: any){}
} 
export class InsertSuccess implements Action{
    readonly type = blogActionType.INSERT_SUCCESS;
    constructor(public payload: any){}
} 
export class LoadSingle implements Action{
    readonly type = blogActionType.LOAD_SINGLE;
    constructor(public payload: any){}
} 

export class LoadSingleSuccess implements Action{
    readonly type = blogActionType.LOAD_SINGLE_SUCCESS;
    constructor(public payload: any){}
} 

export type All =
  | Insert 
  | Edit
  | Load
  | LoadSuccess
  | InsertSuccess
  | LoadSingle
  | LoadSingleSuccess
    