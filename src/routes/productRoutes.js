import { Router } from 'express';
import { ProductController } from '../controllers/productController.js';

export class ProductRoutes {

  #router = Router();

  productController = new ProductController;

  constructor(){};

   init() {
       
        this.#router.get('/product', this.productController.getProducts);
        this.#router.post('/product', this.productController.postProducts);
        this.#router.delete('/product', this.productController.delProducts)
        this.#router.put('/product', this.productController.putProducts);

        return this.#router;
    }
}
