import { Router } from 'express';
import { LoginContoller } from '../controllers/loginController.js';

export class ProductRoutes {

  #router = Router();

  loginController = new LoginContoller; 

  constructor(){};

    init(){

      this.#router.get('/', this.loginController.getProducts )
    }

}
