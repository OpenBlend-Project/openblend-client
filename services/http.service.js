import axios from 'axios'

class HttpService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_APP_SERVER_URL || "http://localhost:5005"
    }),
    
    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    })
  }
}

export default HttpService;