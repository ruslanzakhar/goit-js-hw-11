import axios from 'axios';
export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '35646332-c99e451c5ce06ad1c5a7390a9';
  #query = '';

  constructor() {
    this.page = 1;
  }

  fetchPhotosByQuery() {
    return axios.get(`${this.#BASE_URL}`, {
      params: {
        q: this.#query,
        page: this.page,
        per_page: 40,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: ' true',
        key: this.#API_KEY,
      },
    });
  }

  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
}