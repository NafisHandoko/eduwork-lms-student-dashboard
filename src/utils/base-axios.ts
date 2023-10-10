import axios from "axios";
import { app } from "../config/app";

interface AxiosConfigInterface {
  baseUrl?: string | null;
  authorization: string;
  contentType?: string;
}

export const AxiosWrapper = {
  init: (config?: AxiosConfigInterface) => {
    axios.defaults.baseURL = app.API_URL+'/api';
    if (config?.authorization) {
      axios.defaults.headers.common['Authorization'] = `bearer ${config.authorization}`;      
    }
    // axios.defaults.headers.post['Content-Type'] = config.contentType ?? 'application/json';
  }
}