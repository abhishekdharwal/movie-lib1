import axios from "axios";
const headers = {
  "Content-Type": "application/json",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

const main0 = axios.create({
  baseURL: "https://movie--lib.herokuapp.com/",
  headers,
});
const main = axios.create({ baseURL: "https://www.omdbapi.com/", headers });
export { main0, main };
