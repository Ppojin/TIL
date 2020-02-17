import axios from 'axios';

// define action constants
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

// define api server address
const ROOT_URL = "http://127.0.0.1:8800/api";

// fetch post
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/blogs`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

// create post
export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/blogs`, values)
    .then(()=>callback());

  return {
    type: CREATE_POST,
    payload: request
  }
}


// detail post
export function fetchPost(id) {
  // console.log("fetchlog 1")
  const request = axios.get(`${ROOT_URL}/blogs/${id}`);
    // .then((res)=>console.log("fetchlog 2", res.data));
  return {
    type: FETCH_POST,
    payload: request
  }
}

// delete post
export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/blogs/${id}`)
    .then(() => callback());
  return {
    type: DELETE_POST,
    payload: request
  }
}