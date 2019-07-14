import axios from "axios";

const API_KEY = "dab15c856a2d47f388293819190107";

export default axios.create({
  baseURL: "http://api.apixu.com/v1/",
  params: {
    days: 5,
    key: API_KEY
  }
});
