import { LoginService } from '../services/login_services.js';

export class LoginController {
  
  #loginService = new LoginService();
  
 loginUser = async (req, res) => {
  try {

    const { username } = req.body;
    const { password } = req.body;
    
    const result = await this.#loginService.authenticate(username, password);

    return res.json({ token: result.token });

  } catch (error) {
    return res.status(500).json({ error: 'Login failed' });
  }
};

  loginValid =(req, res) => {
    try{
        return res.status(201).json({user: req.user, token: "token valid"})
    }catch(error){console.log("error", error)}
  }
}