  import { ProductRoutes } from './src/routes/product_routes.js';
  import { LoginRoutes } from './src/routes/login_routes.js';  // Add this
  import { Server } from './src/server/server.js';

  async function main(){

    const server = new Server(); 
    
    const productRoutes = new ProductRoutes();
    const loginRoutes = new LoginRoutes();

    server.addRoute('/api', productRoutes.init());

    server.addRoute('/auth', loginRoutes.init()); 

    //server.start();

    return server.getApp();
    
  }

  export default main().catch(error => {
    console.log('Server error:', error.message);
    throw error;
  });

