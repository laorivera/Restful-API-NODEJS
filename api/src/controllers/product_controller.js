import { ProductServices } from '../services/product_services.js'
import { ProductModels } from "../models/product_models.js"


export class ProductController {

    productServices = new ProductServices
    productModels = new ProductModels
    
    getProducts = async (req, res) => {
      const { id } = req.params
      console.log(id)
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
        }catch(error) {return res.status(500).json("Error creating product")}
    }

    delProducts = async (req, res) => {
        const { id } = req.params;
        console.log(id)
        //const list = this.productModels.getProductsAll();
        try{
            if(!id){
                return res.status(400).json("missing ID")
            }
            else {
                const response = await this.productServices.delProducts(id);
                return res.status(201).json(response)
            }
        }catch(error){return res.status(500).json("error deleting")}
    }
    
    putProducts = async (req, res) => {
        const newItem = req.body;
        console.log(newItem.id);
        try{ 
            if(newItem.id === null || newItem.id === ""){
                return res.status(400).json("bad request")
            }
            else {
                const response = await this.productServices.putProducts(newItem)
                console.log(newItem)
                return res.status(201).json(response)
            }

        }catch(error){return res.status(500).json("error upddating")}

    }
}