import { Router } from 'express';
//import { LoginContoller } from '../controllers/login_controller.js';

export class LoginRoutes {

  #router = Router();

  constructor(){};

  init(){
      this.#router.get('/', this.loginController.getProducts )
    }

}
