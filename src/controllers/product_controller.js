import { ProductServices } from '../services/product_services.js'
import { ProductModels } from "../models/product_models.js"


export class ProductController {

    productServices = new ProductServices()
    productModels = new ProductModels()
    
    constructor(){};
    
    getProducts = async (req, res) => {
      try{
      const response = await this.productServices.getProducts();
      res.json(response)
      }catch(error){res.status(500).json("server error")}
    }
    
    postProducts = (req, res) => {
        const newItem = req.body;
        const list = this.productModels.getProductsAll();
        for (let i =0; i < list.length; i++){
            if(req.body.id !== this.productModels.products[i].id){
                 this.productModels.setProduct(newItem)
                 console.log(this.productModels.getProductsAll())
                 return res.status(201).json(newItem)
            }
        }
        //console.log(this.productModels.getProduct());
        return res.status(404).json('id producto ya existe')
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