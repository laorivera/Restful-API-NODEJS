import { LoginModel } from '../models/login_models.js';
import jwt from 'jsonwebtoken';

export class LoginService {

  #loginModel = new LoginModel();
  #JWT_SECRET = process.env.JWT_SECRET;
  
  async authenticate(username, password) {
    const user = await this.#loginModel.validateCredentials(username, password);
        if (user) {
            const token = jwt.sign(
                { userId: user.id, email: user.email },
                this.#JWT_SECRET,
                { expiresIn: '1h' }
            );
        return { token, user };
    }
    
    throw new Error('Invalid credentials');
    }

}