import cors from 'cors';
import 'dotenv/config';

export class Cors {

    cors = cors();

    constructor(){ }

    #allowedOrigins = {
      origin:   process.env.ALLOWED_ORIGINS
    }

    corsOption ={
      origin:  this.#allowedOrigins,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: false,
    }
    
    isCorsvalid(origin){

    }

}