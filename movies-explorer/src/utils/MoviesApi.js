import { apiInitialMovies } from "./constants";

class MoviesApi {
  constructor(url) {
    this._url = url;
  }

  _getResponse(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: 'GET',
    })
    .then(this._getResponse);
  }
}

export const moviesApi = new MoviesApi(apiInitialMovies);
