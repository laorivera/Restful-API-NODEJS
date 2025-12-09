import express from 'express';

export class Server {

    #app = express();

    #port = 3333;

    constructor() {
        this.jsonParse();
        this.cors();
    }

    jsonParse = () => this.#app.use(express.json());
   
    addRoute(path, router) {
        this.#app.use(path, router);
    }

    start() {
        this.#app.listen(this.#port, () => {
            console.log('Server running on port', this.#port);
        });
    }
}