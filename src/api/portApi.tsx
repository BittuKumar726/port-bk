import axios from "axios";
import {
  API_MAX_REQ_TIME_OUT_MS,
  LS_KEY_USER_TOKENS,
} from "../utils/constants";

const axiosInstance = () => {
  const defaultOptions = {
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
    method: "get",
    timeout: API_MAX_REQ_TIME_OUT_MS,
  };
  const instance = axios.create(defaultOptions);
  const response = processInstanceRequest(instance);
  return processInstanceResponse(response);
};

const processInstanceRequest = (instance: any) => {
  instance.interceptors.request.use((config: any) => {
    const lsd = localStorage.getItem(LS_KEY_USER_TOKENS);
    let userToken = "";
    if (lsd !== null) {
      userToken = JSON.parse(lsd)?.AccessToken;
    }
    config.headers["Authorization"] = userToken ? `Bearer ${userToken}` : "";

    return config;
  });
  return instance;
};

const processInstanceResponse = (instance: any) => {
  instance.interceptors.response.use(
    async (response: any) => {
      return Promise.resolve({ ...response?.data });
    },
    async (error: any) => {
      if (!error?.response) {
        return Promise.reject({
          status: 500,
          message: "Server error or Server not working !!",
          success: false,
        });
      }
      const { status, statusText, data } = error?.response;

      return Promise.reject({
        status: data?.statusCode || status,
        message: data?.message || statusText,
        success: false,
      });
    }
  );
  return instance;
};

export default axiosInstance();
