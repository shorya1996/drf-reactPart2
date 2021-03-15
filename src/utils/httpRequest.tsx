import axios from "axios";
import { ROOT_VERSION_DEVCORE } from "../utils/appConfig";
import { logout } from "../common/requireAuth";
axios.interceptors.response.use(
  async function(response) {
    return response;
  },
  function(error) {
    if (error && error.response) {
      if (error.response.status === 401) {
        logout();
      }
    }
    return Promise.reject(error);
  }
);
export function doLoginPost(config) {
  if (config) {
    return axios({
      url: `${ROOT_VERSION_DEVCORE}/` + config.url,
      method: "POST",
      data: config.data,
      headers: {"Content-Type": 'application/json' , Accept:'application/json'}
    });
  }
}
export function doActionGetDevCore(config) {
  const getToken = JSON.parse(localStorage.getItem("user") as any);
  if (config) {
    return axios({
      url: `${ROOT_VERSION_DEVCORE}/` + config.url,
      method: "GET",
      headers: {
        Authorization: "Bearer " + (getToken ? getToken.data.token : "")
      }
    });
  }
}
export function doActionDevCore(config, method) {
  const getToken = JSON.parse(localStorage.getItem("user") as any);
  if (config) {
    return axios({
      url: `${ROOT_VERSION_DEVCORE}/` + config.url,
      method: method,
      data: config.data,
      headers: {
        //'Content-type': 'application/json',
        Authorization: "Bearer " + (getToken ? getToken.data.token : "")
      }
    });
  }
}

export function doActionPostDevCore(config) {
  return doActionDevCore(config, "POST");
}

export function doActionPatchDevCore(config) {
  return doActionDevCore(config, "PATCH");
}

export function doActionPutDevCore(config) {
  return doActionDevCore(config, "PUT");
}

export function doActionDelDevCore(config){
  return doActionDevCore(config, "DELETE");
}


export function doLoginGet(config) {
  if (config) {
    return axios({
      url: `${ROOT_VERSION_DEVCORE}/` + config.url,
      method: "GET",
      data: config.data,
      headers: {}
    });
  }
}