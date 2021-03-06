// ./reducers/reducer_posts.js 
import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST }  from '../actions';
import { CREATE_POST, DELETE_POST }  from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POSTS:
      // return action.payload.data.blogs;
      return _.mapKeys(action.payload.data.blogs, 'id');

    case FETCH_POST:
      return {
        ...state, 
        [action.payload.data.blog.id]: action.payload.data.blog}
    default :
      return state; 
  }
}