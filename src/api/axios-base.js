import axios from "axios";

const instance = process.env.REACT_APP_AXIOS_MOCK_ENABLED === "false" ?
  axios.create({
    baseURL: process.env.REACT_APP_API_URL
  }): axios;

export default instance;
