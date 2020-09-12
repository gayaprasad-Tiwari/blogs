import { Action } from '@ngrx/store';

export enum blogActionType {
    INSERT = '[blog] insert',
    INSERT_SUCCESS = '[blog] Insert Success',
    INSERT_FAILURE = '[blog] Insert Failure',
    Edit = '[blog] Edit',
    EDIT_SUCCESS = '[blog] Edit Success',
    EDIT_FAILURE = '[blog] Edit Failure',
    LOAD = '[blog] load',
    LOAD_SUCCESS = '[blog] Load Success',
    LOAD_FAILURE = '[blog] Load Failure',
    LOAD_SINGLE = '[blog] Load Single',
    LOAD_SINGLE_SUCCESS = '[blog] Load Single Success',
    LOAD_SINGLE_FAILURE = '[blog] Load Single Failure',
    DELETE = '[blog] Delete',
    DELETE_SUCCESS = '[blog] Delete Success',
    DELETE_FAILURE = '[blog] Delete Failure'
}

export class Insert implements Action {
    readonly type = blogActionType.INSERT;
    constructor(public payload: any) { }
}

export class InsertSuccess implements Action {
    readonly type = blogActionType.INSERT_SUCCESS;
    constructor(public payload: any) { }
}
export class InsertFailure implements Action {
    readonly type = blogActionType.INSERT_FAILURE;
    constructor(public payload: any) { }
}

export class Edit implements Action {
    readonly type = blogActionType.Edit;
    constructor(public payload: any) { }
}

export class EditSuccess implements Action {
    readonly type = blogActionType.EDIT_SUCCESS;
    constructor(public payload: any) { }
}

export class EditFailure implements Action {
    readonly type = blogActionType.EDIT_FAILURE;
    constructor(public payload: any) { }
}

export class Load implements Action {
    readonly type = blogActionType.LOAD;
    constructor() { }
}

export class LoadSuccess implements Action {
    readonly type = blogActionType.LOAD_SUCCESS;
    constructor(public payload: any) { }
}

export class LoadFailure implements Action {
    readonly type = blogActionType.LOAD_FAILURE;
    constructor(public payload: any) { }
}

export class LoadSingle implements Action {
    readonly type = blogActionType.LOAD_SINGLE;
    constructor(public payload: any) { }
}

export class LoadSingleSuccess implements Action {
    readonly type = blogActionType.LOAD_SINGLE_SUCCESS;
    constructor(public payload: any) { }
}


export class LoadSingleFailure implements Action {
    readonly type = blogActionType.LOAD_SINGLE_FAILURE;
    constructor(public payload: any) { }
}

export class DeleteBlog implements Action {
    readonly type = blogActionType.DELETE;
    constructor(public payload: any) { }
}

export class DeleteSuccess implements Action {
    readonly type = blogActionType.DELETE_SUCCESS;
    constructor(public payload: any) { }
}
export class DeleteFailure implements Action {
    readonly type = blogActionType.DELETE_FAILURE;
    constructor(public payload: any) { }
}


export type All =
    | Insert
    | InsertSuccess
    | InsertFailure
    | Edit
    | EditSuccess
    | EditFailure
    | Load
    | LoadSuccess
    | LoadFailure
    | LoadSingle
    | LoadSingleSuccess
    | LoadSingleFailure
    | DeleteBlog
    | DeleteSuccess
    | DeleteFailure;
