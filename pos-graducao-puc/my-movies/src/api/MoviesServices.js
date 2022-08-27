import axios from "axios";

const API_KEY = "eaa0e682b3060066aa78da00ef6e7614";

const BASE_URL = "https://api.themoviedb.org/3/";

const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MoviesServices {
    static getMovies() {
        return axios(withBaseUrl("movie/popular"));
    }

    static getMovieById(movieId) {
        return axios(withBaseUrl(`movie/${movieId}`));
    }
}