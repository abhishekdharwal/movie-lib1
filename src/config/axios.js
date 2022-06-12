import axios from "axios";
const headers = {
  method: "GET",
  mode: "no-cors",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  withCredentials: true,
  credentials: "same-origin",
};

export default axios.create({
  baseURL: "https://movie--lib.herokuapp.com/",
  mode: "no-cors",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  withCredentials: true,
  credentials: "same-origin",
});
