import * as auth from '../state';
import * as auth1 from '../../store/reducers/auth.reducers';

import * as BlogState from '../blog-state';
import * as blog from '../../store/reducers/blog.reducer';

export interface AppState {
  blog: any;
  authState: auth.State;
  BlogState: BlogState.BlogState;
}
export const reducers = {
    auth: auth1.reducer,
    blog: blog.blogReducer
};
