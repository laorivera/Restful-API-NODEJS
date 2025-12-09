import { ProductModels } from "../models/product_models";

export class LoginContoller {

  login = (req, res) => {

    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password required' });
    }
    else{
      
    }
  }
}