import jwt  from 'jsonwebtoken';
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET;

export class JwtToken{

  authenticateToken = (req, res, next) => {
  
    const { authorization } = req.headers;

    const authHeader = authorization;

    const token = authHeader

    if (!token) {
      return res.status(401).json({ error: 'Access token required' });
    }
    else {
      jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err){
          switch (err.name){
            case 'TokenExpiredError':
              return res.status(401).json({error: "token expirado"})
            default: 
              return res.status(403).json({error: "token invalido"})
            }
        }
        console.log('token ok valido')
        req.user = user;
        next();
      });
    }

  };

}