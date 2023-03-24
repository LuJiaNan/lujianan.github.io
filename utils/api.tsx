// import axios from "axios";
import request from "./request";
export const getUsersAsync = () => request.get("/users");

export const getUserAsync = (params: any) =>
  request.get(`/users/${params.id}`);

export const addUserAsync = (params: any) =>
  request.post(`/users/add`, {
    ...params
  });
