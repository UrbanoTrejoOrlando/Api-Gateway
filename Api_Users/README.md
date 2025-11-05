# API de Usuarios (CRUD) con Node.js, Express y MongoDB

Este proyecto implementa una **API RESTful de gestión de usuarios** que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una colección de usuarios utilizando **Node.js**, **Express** y **MongoDB**.

---

## 🧰 Funcionalidades principales

- Crear un nuevo usuario (POST)  
- Obtener la lista de todos los usuarios (GET)  
- Obtener los datos de un usuario específico por ID (GET)  
- Actualizar los datos de un usuario (PUT/PATCH)  
- Eliminar un usuario (DELETE)  
- Validación básica de datos  
- Conexión con base de datos MongoDB mediante Mongoose  

---

## 🛠 Tecnologías utilizadas

- Node.js  
- Express  
- MongoDB  
- Mongoose  
- dotenv (variables de entorno)  
- (Opcional) nodemon para desarrollo  

---

## Instalación

1.- Clonar el repositorio
```bash
git clone git@github.com:UrbanoTrejoOrlando/API-User-CRUD-Node-JS-Express-MongoDB.git
```
2.- Navegar al directorio del proyecto
```bash
cd API-User-CRUD-Node-JS-Express-MongoDB
```
3.- Instala las dependencias
```bash
npm install
```
4.- Inicia el servidor
- En **modo desarrollo**
```bash
npm run dev
```
- En **modo producción**
```bash
npm start
```

## Rutas de la API

| Método | Ruta         | Descripción                    |
|--------|--------------|--------------------------------|
| POST   | `/users`     | Crear un nuevo usuario         |
| GET    | `/users`     | Obtener todos los usuarios     |
| GET    | `/username/:username` | Obtener un usuario por el nombre de usuario   |
| GET    | `/users/:id` | Obtener un usuario por el id |
| PUT | `/users/:id` | Editar un usuario             |
| DELETE | `/users/:id` | Eliminar un usuario             |


## Rutas disponibles 
### 🔸 Crear un nuevo usuario (POST `/users`)

- **URL:** `http://localhost:3001/users/`
- **Método:** POST
- **Body (JSON):**

```json
{
    "username": "Orlando",
    "email": "orlandourbanotrejo@gmail.com",
    "password": "12345"
}
```
- **Respuesta esperada: 201 Created**
```json
{
    "username": "Orlando",
    "email": "orlandourbanotrejo@gmail.com",
    "password": "12345",
    "_id": "69026b948899b2af67f9be60",
    "__v": 0
}

```
### 🔸 Obtener todos los usuarios (GET `/users`)
- **URL:** `http://localhost:3001/users/`
- **Método:** GET
- **Respuesta esperada: 200 OK**
```json
[
    {
        "_id": "69026b948899b2af67f9be60",
        "username": "Orlando",
        "email": "orlandourbanotrejo@gmail.com",
        "password": "12345",
        "__v": 0
    }
]
```

### 🔸 Obtener un usuario por el nombre de usuario (GET `/users/username/:username`)
- **URL:** `http://localhost:3001/users/username/Orlando`
- **Método:** GET
- **Respuesta esperada: 200 OK**
```json
[
    {
        "_id": "69026b948899b2af67f9be60",
        "username": "Orlando",
        "email": "orlandourbanotrejo@gmail.com",
        "password": "12345",
        "__v": 0
    }
]
```

### 🔸 Obtener un usuario por el id (GET `/users/:id`)
- **URL:** `http://localhost:3001/users/69026b948899b2af67f9be60`
- **Método:** GET
- **Respuesta esperada: 200 OK**
```json
[
    {
        "_id": "69026b948899b2af67f9be60",
        "username": "Orlando",
        "email": "orlandourbanotrejo@gmail.com",
        "password": "12345",
        "__v": 0
    }
]
```
### 🔸 Actualizar un usuario (PUT `/users/:id`)
- **URL:** `http://localhost:3001/users/69026b948899b2af67f9be60`
**Método:** PUT
- **Body (JSON):**
```json
{
    "password": "fedora"
}
```
- **Respuesta esperada: 200 OK**
```json
 {
    "_id": "69026b948899b2af67f9be60",
    "username": "Orlando",
    "email": "orlandourbanotrejo@gmail.com",
    "password": "fedora",
    "__v": 0
}
```
### 🔸 Eliminar una tarea (DELETE `/users/:id`)
- **URL:** `http://localhost:3001/users/69026b948899b2af67f9be60`
**Método:** DELETE
- **Respuesta esperada: 200 OK**
```json
{
    "message": "Usuario eliminado"
}
```

