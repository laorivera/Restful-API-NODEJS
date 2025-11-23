export class ProductModels {

    constructor(){};
    
    product = { 
        id:   String,
        title:  String,
        price: Number,
        description: String,
        image:  String,
        };
    
    products = []; // store product array

    generateId(){const id = Math.random(); return id}

    getProducts(){return this.products};

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
    }

     delProductByIndex(index) {
      const newProducts = [];
        for (let i = 0; i < this.products.length; i++) {
            if (i !== index) {
                newProducts.push(this.products[i]);
            }
        }
      this.products = newProducts;
    }

    putProduct(item){
     const list = this.products
     for(let i = 0; i < list.length; i++){
        if (item.id === list[i].id) 
            {list[i] = {
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
