# API Sistema de inventario NODEJS

Product API

REST API for product management with Firebase Firestore.
🚀 Quick Start
bash

npm install
node index.js
# Server runs on http://localhost:3333

📁 Project Structure
text

src/ 

  index.js
  
  ├── server/       # Express config
    
  ├── controllers/  # Route handlers
  
  ├── models/       # Firebase operations
    
  ├── services/     # Business logic
   
  └── routes/       # API endpoints

📡 API Endpoints

GET /api/product

Get all products

    Response:  [{id, name, price, description, sku, stock, category}]

GET  /api/product/:id

Get product by ID
POST /api/product

Create product

    Body: {

        "name": "string",
  
        "price": "number",
  
        "description": "string",
  
        "sku": "string",
  
        "stock": "number",
  
        "category": "string"
  
    }

PUT /api/product

Update product

    Body: {
    
      "id": "string",        // Required - Document ID
      "name": "string",
      "price": "number",
      ...all other fields
      
    }

DELETE /api/product

Delete product

    
      Body: {  
      
        "id": "string"  
        
        }
    

⚙️ Setup
    Add Firebase config to src/server/firebase.js
    Start server: node index.js
    API base: http://localhost:3333/api

🔧 Tech Stack
    Node.js + Express
    Firebase Firestore
