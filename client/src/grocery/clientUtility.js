import axios from "axios";
import { serverUrl } from "./config";

export const nativeFetch = ({ url, method, params, data }) => {
  let config = {
    method,
    data,
    params,
    url,
    baseURL: serverUrl
  };
  return axios(config).then(response => {
    return response.data;
  });
};

export const findIndex = (array, row) => {
  if (!array || !Array.isArray(array) || !row) {
    return undefined;
  }
  return array.findIndex(data => data._id == row._id);
};

export const isEqualObject = (obj1, obj2) => {
  let result = true;
  if (Object.keys(obj1).length != Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
    if (obj1[key] != obj2[key]) {
      return false;
    }
  }
  return result;
};
