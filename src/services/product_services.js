import { ProductModels } from '../models/product_models.js'

export class ProductServices {

  productModels = new ProductModels()

  constructor(){}

  async getProduct(){
    const allitems = await this.productModels.getProductAll();
    return allitems;
  }

  async getProductbyId(id){
    const itembyid = await this.productModels.getProductByID(id);
    return itembyid;
  }

 async postProduct(newItem) {
    // Business logic validation
    if(newItem.price <= 0) {
        return console.log('precio debe ser positivo')
    }else {return await this.productModels.setProduct(newItem);}
    
}

  async delProducts(){
    
  }

  async putProducst(){

  }
}