import { Action } from '@ngrx/store';
import {IUser} from '../../models/user';

export const INSERT = '[IUser] insert';

export class InsertAction implements Action {
    readonly type = INSERT;
    constructor(public payload:IUser){}
}

