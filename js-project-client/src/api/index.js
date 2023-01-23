import axios from "axios";

export const BASE_URL = "https://localhost:7210";
export const ENDPOINTS = {
  films: "Films",
  directors: "Directors",
  categories: "Categories",
};

export const API = (endpoint) => {
  let url = BASE_URL + "/api/" + endpoint + "/";
  return {
    getAll: () => axios.get(url),
    getById: (id) => axios.get(url + id),
    post: (newRecord) => axios.post(url, newRecord),
    put: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    delete: (id) => axios.delete(url + id),
  };
};
