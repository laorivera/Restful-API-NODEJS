import { ProductModels } from "../models/productModels.js"

export class ProductController {

    productModels = new ProductModels

    constructor(){}
    
    getProducts = (req, res) => {
        return res.json(this.productModels.getProducts())
    }
    
    postProducts = (req, res) => {
        const newItem = req.body;
        this.productModels.setProduct(newItem);
        //console.log(this.productModels.getProduct());
        return res.status(201).json(newItem)
    }

    delProducts = (req, res) => {
        const delitemID = req.body.id;
        const list = this.productModels.getProducts();
        for(let i = 0; i < list.length; i++){
            if (delitemID === list[i].id){ this.productModels.delProductByIndex(i); return res.status(201).json("item id eliminado", delitemID)}
        }
        return res.status(404).json("item no existe")
    }
    
    putProducts = (req, res) => {
        const itemID = req.body.id 
        if(itemID === this.productModels.product.id){
        this.productModels.putProduct(itemID)
        }
    }
}