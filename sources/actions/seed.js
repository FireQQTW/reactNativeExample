
import {create} from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://api.movies.i-uix.com'
})

export const SETTING_NAME = 'SETTING_NAME';
export const SETTING_ID = 'SETTING_ID';
export const GET_POSTS = 'GET_POSTS';
export const GET_NEXT_POSTS = 'GET_NEXT_POSTS';

export function setName() {
  return {
    type: SETTING_NAME
  };
};

export function setID() {
  return {
    type: SETTING_ID
  };
};

export function setPosts(data) {
  return {
    type: GET_POSTS,
    data
  };
};

export function setNextPosts(data) {
  return {
    type: GET_NEXT_POSTS,
    data
  };
};

export function callGetPosts() {
  return dispatch => {
    return getPosts()
      .then(res => res.data).then(
      success => dispatch(setPosts(success)),
      error => dispatch())
      .catch(function(ex) {
        console.tron.log('callGetPosts error', ex)
      })
  }
}

export function callGetPostsNext(url) {
  return dispatch => {
    return fetch(url)
      .then(res => res.json()).then(
      success => dispatch(setNextPosts(success)),
      error => dispatch())
      .catch(function(ex) {
        console.tron.log('callGetPostsNext error', ex)
      })
  }
}

export function callSetID() {
  return dispatch => {
    dispatch(setID())
  }
}

function getPosts() {
  return api.get('/api/v1/movies');
}
