import axios from "axios";

const API_KEY = "8af0020b2964b97740da52dcd4438fab";
const BASE_URL = "https://api.themoviedb.org/3";

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
  static getMovies() {
    return axios(withBaseUrl("/movie/popular"));
  }
}
