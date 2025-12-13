import { Firebase } from '../server/firebase.js'

import { collection, getDoc, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';

export class ProductModels {

    firebase = new Firebase;
    
    productsCollection = collection(this.firebase.db, 'products');

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
        }catch(error){console.log("error setproduct", error);}
    };

    async delProductByIndex(index) {
      try {
        const id = index
        const docRef = doc(this.productsCollection, id)
        await deleteDoc(docRef)
        console.log("documento deleted")
        return id
      }catch(error){console.error("error deleting product layer", error)}
    };

   async putProductByindex(payload){
    try {
        const id = payload.id;
        console.log(id, "again")
        const docRef = doc(this.productsCollection, id);
        const docSnapshot = await getDoc(docRef);
         if (docSnapshot.exists()){
            await updateDoc(docRef, {
                name: payload.name, 
                price: payload.price,
                description: payload.description,
                sku: payload.sku,
                stock: payload.stock,
                category: payload.category,
            });
            return docSnapshot
          }
        }catch(error){console.log("error updating", error)}  
    };  
}
