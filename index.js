import { ProductRoutes } from './src/routes/product_routes.js';
import { LoginRoutes } from './src/routes/login_routes.js';  // Add this
import { Server } from './src/server/server.js';

async function main(){

    const server = new Server(); 
    
    const productRoutes = new ProductRoutes();
    const loginRoutes = new LoginRoutes();

    server.addRoute('/api', productRoutes.init());

    server.addRoute('/auth', loginRoutes.init()); 

    return server.getApp();
}

const appPromise = main().catch(error => {
    console.log('Server error:', error.message);
    throw error;
});


export default appPromise;

/*

if (process.env.VERCEL !== '1') {
    appPromise.then(app => {
        const PORT = process.env.PORT || 3333;
        app.listen(PORT, () => {
            console.log(`Local server running on port ${PORT}`);
        });
    });
}*/