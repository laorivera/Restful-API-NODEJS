import { ProductRoutes } from './src/routes/product_routes.js';
import { Server } from './src/server/server.js';

async function main(){

  const server = new Server(); 
  const productRoutes = new ProductRoutes()

  server.start()

  server.addRoute('/api', productRoutes.init())
  //server.addRoute('/login', loginRoutes.inti())
  
}

main().catch(error => {
  console.log('Server error:', error.message);
  console.log(error.stack);
});

