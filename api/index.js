
import { ProductRoutes } from '../src/routes/product_routes.js';
import { LoginRoutes } from '../src/routes/login_routes.js'; 
import { Server } from '../src/server/server.js';


async function main(){

    try {
    const server = new Server(); 
    
    const productRoutes = new ProductRoutes();
    const loginRoutes = new LoginRoutes();

    server.addRoute('/api', productRoutes.init());

    server.addRoute('/auth', loginRoutes.init()); 

    return server.start();
    }
    
    catch(error){'main failed', error}
}

main().catch(err => { console.error(err);});