import { blogActionType, All } from '../actions/blog.action';
import { BlogState } from '../../models/blog-state';
export const initialState: BlogState = {
  blog: [],
  Message: null
};
export function blogReducer(blogState = initialState, action: All): BlogState {
  switch (action.type) {
    case blogActionType.INSERT: {
      return {
        ...blogState,
        blog: action.payload,
        Message: null
      };
    }
    case blogActionType.INSERT_SUCCESS: {
      return {
        ...blogState,
        blog: action.payload,
        Message: 'blog added successfully'
      };
    }
    case blogActionType.INSERT_FAILURE: {
      return {
        ...blogState,
        Message: 'Unable to add blog'
      };
    }
    case blogActionType.Edit: {
      const newBlog = action.payload.blog;
      return {
        ...blogState,
        blog: [newBlog],
        Message: null
      };
    }
    case blogActionType.EDIT_SUCCESS: {
      return {
        ...blogState,
        blog: action.payload,
        Message: 'blog Edited successfully'
      };
    }
    case blogActionType.EDIT_FAILURE: {
      return {
        ...blogState,
        Message: 'Unable to edit blog'
      };
    }
    case blogActionType.LOAD: {
      return {
        ...blogState,
        Message: null
      };
    }
    case blogActionType.LOAD_SUCCESS: {
      const newBlog = action.payload.blog;
      return {
        ...blogState,
        blog: [...newBlog],
        Message: null
      };
    }
    case blogActionType.LOAD_FAILURE: {
      return {
        ...blogState,
        Message: 'No data found'
      };
    }
    case blogActionType.LOAD_SINGLE: {
      const newBlog = action.payload;
      return {
        ...blogState
      };
    }
    case blogActionType.LOAD_SINGLE_SUCCESS: {
      return {
        ...blogState,
        blog: { ...action.payload },
        Message: 'single blog loaded'
      };
    }
    case blogActionType.LOAD_SINGLE_FAILURE: {
      return {
        ...blogState,
        Message: 'Some error occured, No data found'
      };
    }
    case blogActionType.DELETE: {
      return {
        ...blogState,
        Message: null
      };
    }
    case blogActionType.DELETE_SUCCESS: {
      return {
        ...blogState,
        Message: 'Succesfully deleted the blog'
      };
    }
    case blogActionType.DELETE_FAILURE: {
      return {
        ...blogState,
        Message: 'Unable to delete data'
      };
    }
    default: {
      return blogState;
    }
  }
}
