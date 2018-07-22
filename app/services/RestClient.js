import axios from 'axios';
import { apiUrls } from './apiUrls';

export default class RestClient {
  static test() {
    return this.makeRequest(apiUrls.test, { method: 'GET' });
  }

  static makeRequest(url, options = {}) {
    if (options.method !== 'GET') {
      const headers = options.headers || {};
      if (!headers['Content-Type']) {
        headers['Content-Type'] = 'application/json';
        headers['Accept'] = 'application/json';
      }
      options.headers = headers;
    }
    options.url = url;
    return axios(options);
  }
}
