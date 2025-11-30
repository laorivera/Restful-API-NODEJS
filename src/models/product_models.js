import { Firebase } from '../server/firebase.js'

import { collection, getDoc, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

export class ProductModels {

    constructor(){};

    firebase = new Firebase();
    
    productsCollection = collection(this.firebase.db, 'products');

    products = []; // store product array

    async getProductsAll(){
        const dbcollection = await getDocs(this.productsCollection);
        const allproducts = dbcollection.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        return allproducts
    }; 

    async getProductsByID(id){  // id is a string
        try{
        const item = await getDoc(doc(this.productsCollection, id));
        if(item.exists()){
            return item.data()
        }
        else{ return null}
        }catch(error){console.log("getproduct error")}
    };

    setProduct(item) {
        const createitem = {
            id: item.id,
            name: item.name, 
            price: item.price,
            description: item.description,
            price: item.price,
            image: item.image,
        }; 
        this.products.push(createitem)
    };

    delProductByIndex(index) {
      const newProducts = [];
        for (let i = 0; i < this.products.length; i++) {
            if (i !== index) {
                newProducts.push(this.products[i])
                }
        }
      this.products = newProducts
    };

    putProductByindex(index){
    const list = this.products;
        for(let i = 0; i < list.length; i++){
            if (index === list[i].id) {
                list[i] = {
                id: item.id,
                name: item.name, 
                price: item.price,
                description: item.description,
                image: item.image
                }
            }
        }
    }  
}
