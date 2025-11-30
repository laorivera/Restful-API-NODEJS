import { ProductModels } from '../models/product_models.js'

export class ProductServices {

  productModels = new ProductModels()

  constructor(){}

  async getProducts(){
    const allitems = await this.productModels.getProductsAll();
    return allitems
  }

  async postProducts(){
  
  }

  async delProducts(){

  }

  async putProducst(){
    
  }
}