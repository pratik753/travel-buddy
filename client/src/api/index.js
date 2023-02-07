import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:4000" });

export const fetchPosts = () => API.get("/api/v1/tours/top-5-cheap");

export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post("/api/v1/user/signin", formData);
export const signUp = (formData) => API.post("/api/v1/users/signup", formData);
export const getonePosts = (id) => API.get(`/api/v1/tours/tour/${id}`);
// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("profile")).token
//     }`;
//   }
//   return req;
// });

// get 5 tours new addddd
