import HttpService from './http.service';

class AuthService extends HttpService {
  constructor() {
    super();
  }

  signin = (requestBody) => {
    return this.api.post("/auth/signin", requestBody);
  };

  signup = (requestBody) => {
    return this.api.post("/auth/signup", requestBody);
  };

  verify = () => {
    return this.api.get("/auth/verify");
  }
}

const authService = new AuthService();

export default authService;