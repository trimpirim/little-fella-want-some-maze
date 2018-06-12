import axios from 'axios';

export class BaseAPI {
  constructor(path) {
    this.endpoint = `https://ponychallenge.trustpilot.com/pony-challenge/${path}`;
  }

  get(path) {
    return axios.get(`${this.endpoint}${path}`);
  }

  post(path, data) {
    return axios.post(`${this.endpoint}${path}`, data);
  }
}
