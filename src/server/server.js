import express from 'express';
import {Cors} from './cors.js'

export class Server {

    #cors = new Cors(); 

    #app = express();

    #port = 3333;

    constructor() {
        this.jsonParse();
        this.initcors();
    }


    initcors = () => this.#app.use(this.#cors.corsinit());
    jsonParse = () => this.#app.use(express.json());
   
    addRoute(path, router) {
        this.#app.use(path, router);
    }

     getApp() {
        return this.#app;
    }

    start() {  
        this.#app.listen(this.#port, () => {  //docker
            console.log('Server running on port', this.#port);
        });
    }
}