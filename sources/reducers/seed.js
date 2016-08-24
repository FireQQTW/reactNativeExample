import { SETTING_NAME, SETTING_ID, GET_POSTS, GET_NEXT_POSTS } from '../actions/seed';

const initState = {
  id: 1,
  name: 'mark',
  posts: [],
  meta: {}
}

export default function seed(state = initState, action) {
  switch (action.type) {
  case SETTING_NAME:
    return Object.assign({}, state, {
      name: 'mary'
    })
  case SETTING_ID:
    return Object.assign({}, state, {
      id: 2
    })
  case GET_POSTS:
    return Object.assign({}, state, {
      posts: action.data.data,
      meta: action.data.meta
    })
  case GET_NEXT_POSTS:
    return Object.assign({}, state, {
      posts: [...state.posts, ...action.data.data]
    })
  default:
    return state;
  }
};
