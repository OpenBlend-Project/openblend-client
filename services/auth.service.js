import PrivateService from './private.service';

class AuthService extends PrivateService {
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