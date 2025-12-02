import { ProductServices } from '../services/product_services.js'
import { ProductModels } from "../models/product_models.js"


export class ProductController {

    productServices = new ProductServices
    productModels = new ProductModels
    
    constructor(){};
    
    getProducts = async (req, res) => {
      const { id } = req.query
      try{
        if(id){ const response = await this.productServices.getProductbyId(id);
            console.log('item ID: ', id)
            return res.json(response)
        }
        else{ const response = await this.productServices.getProduct();
           console.log('id no encontrado')
           return res.status(201).json(response)
        }
      }catch(error){return res.status(500).json("error controller getproducts")}
    }
    
    postProducts = async (req, res) => {
        const newItem = req.body;
        console.log(newItem)
     try{
        if(!newItem.name || !newItem.price || !newItem.sku) {
            return res.status(400).json("missing name, price or sku")
        }
        else {
        const response = await this.productServices.postProduct(newItem);
            return res.status(201).json(response)
        }
      } catch(error) {return res.status(500).json("Error creating product")
    }
}


    delProducts = (req, res) => {
        const delitemID = req.body.id;
        const list = this.productModels.getProductsAll();
        for(let i = 0; i < list.length; i++){
            if (delitemID === list[i].id){ this.productModels.delProductByIndex(i);
                 
                return res.status(201).json("item id eliminado", delitemID)
                
            }
        }
        return res.status(404).json("item no existe")
    }
    
    putProducts = (req, res) => {
        const itemID = req.body.id 
        const list = this.productModels.getProductsAll();
        for(let i = 0; i < list.length; i++){
            if (itemID === list[i].id){ this.productModels.putProductByIndex(i); return res.status(201).json("item id eliminado", delitemID)}
        }
    }


}