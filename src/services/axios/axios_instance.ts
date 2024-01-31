import axios from 'axios';

class AxiosInstance {
  private baseURL;

  constructor() {
    this.baseURL = process.env.AWESOME_BASE_URL;
  }

  async createInstance() {
    return axios.create({
      baseURL: this.baseURL,
      headers: { 'X-Custom-Header': 'foobar' },
    });
  }
}

export default AxiosInstance;
