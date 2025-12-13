import { Router } from 'express';
import { ProductController } from '../controllers/product_controller.js';

export class ProductRoutes {

  #router = Router();

  #productController = new ProductController;

  init() {
      
      this.#router.get('/product/:id', this.#productController.getProducts);
      this.#router.get('/product', this.#productController.getProducts);
      this.#router.post('/product', this.#productController.postProducts);
      this.#router.delete('/product/:id', this.#productController.delProducts)
      this.#router.put('/product', this.#productController.putProducts);

      return this.#router;
    }
}
