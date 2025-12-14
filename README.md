Product API

API REST para gestión de productos con Firebase Firestore.
🚀 Inicio Rápido
bash

URL HOSTING: http://56.125.242.25:3333/

npm install
node index.js
# Servidor corre en http://localhost:3333

📁 Estructura del Proyecto
text

src/
index.js

├── server/       # Configuración de Express

├── controllers/  # Manejadores de rutas

├── models/       # Operaciones de Firebase

├── services/     # Lógica de negocio

└── routes/       # Endpoints de API

📡 Endpoints 

Obtener todos los productos

GET /api/product

    Respuesta: [{id, nombre, precio, descripción, sku, stock, categoría}]

Obtener producto por ID

GET /api/product/:id

Crear producto

POST /api/product

    Body: {

      "name": "string",

      "price": "number",

      "description": "string",

      "sku": "string",

      "stock": "number",

      "category": "string"

    }
    
Actualizar producto

PUT /api/product

    Body: {

      "name": "string",

      "price": "number",

      "description": "string",

      "sku": "string",

      "stock": "number",

      "category": "string"

    }

Eliminar producto

DELETE /api/product

    Body: {"id": "string"}

⚙️ Configuración

    Iniciar servidor: node index.js

    Base de API: http://localhost:3333/api

🔧 Tecnologías

    Node.js + Express

    Firebase Firestore


🔐 Endpoints de Autenticación

Login de usuario

 POST /auth/login

    Body:
        json

        {
          "username": "string",
          "password": "string"
        }

=>

    Respuesta: 
    
        { "token": "jwt-token" }

Validar token y obtener datos de usuario (Protegido)

GET /auth/user
Headers: Authorization: Bearer <token-jwt>

👥 Usuarios de Prueba

    username: juanperez12
    password: admin123
    email: examlpe@domain.com

    username: luciv  
    password: admin321
    email: luci@domain.com
