import axios from "axios";
import md5 from "md5";

const ts = Number(new Date());
const privateKey = "be59642fae1eaddc4bd46ec5a450b2503e3971a2";
const publicKey = "afef6870ca7c20012808038944a3f344";
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default api;
