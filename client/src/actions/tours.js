import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getTours = () => async (dispatch) => {
  try {
    console.log("ji");
    const { data } = await api.fetchPosts();
    console.log(data.data.tours, "data");
    dispatch({ type: FETCH_ALL, payload: data.data.tours });
  } catch (error) {
    console.log(error.message);
  }
};
export const getOneTour=(id)=>async (dispatch)=>{
  try
  {
    const { data } = await api.getonePosts(id);
    console.log(data.data.tour, "data");
    dispatch({ type: FETCH_ALL, payload: data.data.tour });
  }
  catch(err)
  {
    console.log(err.message);
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log("hi");
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
