
import { ProductRoutes } from '../src/routes/product_routes.js';
import { LoginRoutes } from '../src/routes/login_routes.js'; 
import { Server } from '../src/server/server.js';

let cachedApp;

function main(){

    const server = new Server(); 
    
    const productRoutes = new ProductRoutes();
    const loginRoutes = new LoginRoutes();

    server.addRoute('/api', productRoutes.init());

    server.addRoute('/auth', loginRoutes.init()); 

    return server.getApp();
}

export default function handler(req, res) {
  if (!cachedApp) {
    cachedApp = main();
  }
  return cachedApp(req, res);
}

/*

if (process.env.VERCEL !== '1') {
    main().then(app => {
        const PORT = process.env.PORT || 3333;
        app.listen(PORT, () => {
            console.log(`Local server running on port  ${PORT}`);
        });
    });
}

*/
