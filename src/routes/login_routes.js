import { Router } from 'express';
import 'dotenv/config';
//import { LoginContoller } from '../controllers/login_controller.js';

export class LoginRoutes {

  constructor(){}

  #router = Router();

  #JWT_SECRET = process.env.JWT_SECRET;

  init(){
      this.#router.get('/', this.loginController.getProducts)
      this.#router.get('/user', this.loginController.getProducts )
    }

}
