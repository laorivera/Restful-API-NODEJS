import { Firebase } from '../server/firebase.js'

import { collection, getDoc, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

export class ProductModels {

    constructor(){};

    firebase = new Firebase;
    
    productsCollection = collection(this.firebase.db, 'products');

    products = []; // store product array

    async getProductAll(){
        const dbcollection = await getDocs(this.productsCollection);
        const allproducts = dbcollection.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        return allproducts
    }; 

    async getProductByID(id){  // id is a string
        try{
        const item = await getDoc(doc(this.productsCollection, id));
        if(item.exists()){
            return item.data()
        }
        else{ return null}
        }catch(error){console.log("error getproductid", error)}
    };

    async setProduct(payload) {
      try{
        const createitem = {
            name: payload.name, 
            price: payload.price,
            description: payload.description,
            sku: payload.sku,
            stock: payload.stock,
            category: payload.category,
        }; 
        const docRef = await addDoc(this.productsCollection, createitem)
        return docRef.id
        }catch(error){console.log("error setproduct", error)}
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
