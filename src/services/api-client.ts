import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "89304be12ead40de8e6bb29ead8608ce",
  },
});
