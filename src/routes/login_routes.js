import { Router } from 'express';
import { LoginController } from '../controllers/login_controller.js';
import { JwtToken } from '../middlewares/auth_middlewares.js';

export class LoginRoutes {

  #router = Router();

  #auth = new JwtToken();

  #loginController = new LoginController();

  
  init() {

    this.#router.post('/login', this.#loginController.loginUser);
    
    this.#router.get('/user', this.#auth.authenticateToken, this.#loginController.loginValid)

    return this.#router;

  }
  
}