import axios from "axios";
import https from "https";

const instance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/",
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export default instance;
