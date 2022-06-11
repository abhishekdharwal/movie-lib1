import axios from "axios";
const headers = {
  "Content-Type": "application/json",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

export default axios.create({
  baseURL: "https://www.omdbapi.com/",
  headers: { "X-Custom-Header": "foobar" },
});
