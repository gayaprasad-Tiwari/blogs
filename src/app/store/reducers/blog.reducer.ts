import { blogActionType, All } from '../actions/blog.action';
import { BlogState } from '../../models/blog-state';
export const initialState:BlogState={
  blog:[],
  singleBlog:null,
  Message:null
}
  export function blogReducer(blogState = initialState, action: All): BlogState {
    switch (action.type) {
        case blogActionType.INSERT:{
            return {
              ...blogState,
               blog : action.payload,
               Message:null
              }
        }
        case blogActionType.Edit:{
          return {
            ...blogState,
             Message:null
            }
      }
        case blogActionType.LOAD:{
            return {
              ...blogState
            }
          }
        case blogActionType.LOAD_SUCCESS:{
          let newBlog= action.payload.blog
          return {
            ...blogState,
            blog : [...newBlog],
            Message:null
          } 
        }
        case blogActionType.INSERT_SUCCESS:{
          return  {
            ...blogState,
            blog :action.payload,
            Message:'blog added successfully'
          }
      }
      case blogActionType.LOAD_SINGLE:{
        let newBlog= action.payload
        return  {
          ...blogState,
          singleBlog : newBlog,
          Message:null
        }
    }
    case blogActionType.LOAD_SINGLE_SUCCESS:{
      return  {
        ...blogState,
        singleBlog :action.payload,
        Message:'single blog loaded'
      }
  }
        default: {
            return blogState;
          }
    }

  }