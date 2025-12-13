import cors from 'cors';
import 'dotenv/config';

export class Cors {

    #allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];

    corsOption ={
      origin:  this.#allowedOrigins,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: false,
    };
    
    corsinit = () => {
     const allowed = this.#allowedOrigins
     console.log('Cors options:', this.corsOption)
     console.log('Cors allowed:', allowed)
     return cors(this.corsOption)
    
    }

}