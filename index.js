  import { ProductRoutes } from './src/routes/product_routes.js';
  import { Server } from './src/server/server.js';

  async function main(){

    const server = new Server(); 
    
    const productRoutes = new ProductRoutes();

    server.addRoute('/api', productRoutes.init());

    //server.addRoute('/login', loginRoutes.inti());

    server.start();
    
  }

  main().catch(error => {
    console.log('Server error:', error.message);
  });

