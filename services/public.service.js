import axios from 'axios'

class PublicService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_APP_PUBLIC_SERVER_URL || "http://localhost:3005"
    })
  }
}

export default PublicService;