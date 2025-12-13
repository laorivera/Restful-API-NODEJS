//import { ProductRoutes } from './src/routes/product_routes.js';
//import { LoginRoutes } from './src/routes/login_routes.js';  // Add this
//import { Server } from './src/server/server.js';

import express from 'express';

// Create a basic app as fallback
const testApp = express();
testApp.get('/', (req, res) => {
    res.json({ status: 'API is alive', error: null });
});

// Try to load your real app, fallback to test app
async function getApp() {
    try {
        const realApp = await main();
        // Add a health check to real app
        realApp.get('/health', (req, res) => {
            res.json({ status: 'healthy', app: 'real' });
        });
        return realApp;
    } catch (error) {
        console.error('Failed to load real app, using test app:', error.message);
        return testApp;
    }
}



async function main() {
    try {
        console.log('Starting server initialization...');
        
        // Import with error handling
        const { Server } = await import('./src/server/server.js');
        const { ProductRoutes } = await import('./src/routes/product_routes.js');
        const { LoginRoutes } = await import('./src/routes/login_routes.js');
        
        console.log('All modules imported successfully');
        
        const server = new Server();
        const productRoutes = new ProductRoutes();
        const loginRoutes = new LoginRoutes();

        server.addRoute('/api', productRoutes.init());
        server.addRoute('/auth', loginRoutes.init());

        console.log('Routes configured');
        return server.getApp();
        
    } catch (error) {
        console.error('CRITICAL ERROR during setup:', error);
        console.error('Stack:', error.stack);
        throw error;
    }
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