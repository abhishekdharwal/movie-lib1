import axios from "axios";
const headers = {
  "Content-Type": "application/json",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

export default axios.create({
  baseURL: "http://localhost:5500/",
  headers,
});
