import {IBlog} from './blog'
export interface BlogState {
    blog: IBlog[] | null;
    // error message
    Message: string | null;
  }