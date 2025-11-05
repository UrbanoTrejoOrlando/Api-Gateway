# API-GATEWAY
Api gateway conbinando dos Apis de autentificacion y CRUD de usuarios en un Gateway

**Nota:** Es importante tener en ejecución **Api_Users** y **Api_Auntentificación** 

## Instalación

1.- Clonar el repositorio
```bash
 git clone https://github.com/UrbanoTrejoOrlando/Api-Gateway.git
```
2.- Navegar al directorio del proyecto
```bash
cd Api_Gateway
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

## Rutas de la API


| Método | Ruta | Descripción |
|--------|------|-------------|
| <div align="center">🟩 **API-USERS**</div> |  |  |
| **POST**   | `/users`     | Crear un nuevo usuario         |
| **GET**    | `/users`     | Obtener todos los usuarios     |
| **GET**    | `/username/:username` | Obtener un usuario por el nombre de usuario |
| **GET**    | `/users/:id` | Obtener un usuario por el id |
| **PUT** | `/users/:id` | Editar un usuario             |
| **DELETE** | `/users/:id` | Eliminar un usuario             |
| <div align="center">🟦 **API-AUTH**</div> |  |  |
| **GET**    | `/users`           | Obtener todos los usuarios     |
| **GET**    | `/saludo-protegido`| Mostrar el mensaje oculto      |
| **POST**    | `/user`           | Crear un usuario nuevo         |
| **POST**   | `/login`           | Inicio de sesión               |


## Rutas disponibles (Gateway API-USERS)

### 🔸 Crear un nuevo usuario (POST `/users`)

- **URL:** `http://localhost:4000/api/users/users/`
- **Método:** POST
- **Body (JSON):**

```json
{
    "username": "lacho",
    "email": "lacho@gmail.com",
    "password": "linux"
}
```
- **Respuesta esperada: 200 Created**
```json
{
    "username": "lacho",
    "email": "lacho@gmail.com",
    "password": "linux",
    "_id": "690bc077ebfb8a127bc2002a",
    "__v": 0
}
```
### 🔸 Obtener todos los usuarios (GET `/users`)
- **URL:** `http://localhost:4000/api/users/users/`
- **Método:** GET
- **Respuesta esperada: 200 OK**
```json
[
    {
        "_id": "690bc077ebfb8a127bc2002a",
        "username": "lacho",
        "email": "lacho@gmail.com",
        "password": "linux",
        "__v": 0
    }
]
```
### 🔸 Obtener un usuario por el nombre de usuario (GET `/users/username/:username`)
- **URL:** `http://localhost:4000/api/users/users/username/lacho`
- **Método:** GET
- **Respuesta esperada: 200 OK**
```json
{
    "_id": "690bc077ebfb8a127bc2002a",
    "username": "lacho",
    "email": "lacho@gmail.com",
    "password": "linux",
    "__v": 0
}
```

### 🔸 Obtener un usuario por el id (GET `/users/:id`)
- **URL:** `http://localhost:4000/api/users/users/690bc077ebfb8a127bc2002a`
- **Método:** GET
- **Respuesta esperada: 200 OK**
```json
{
    "_id": "690bc077ebfb8a127bc2002a",
    "username": "lacho",
    "email": "lacho@gmail.com",
    "password": "linux",
    "__v": 0
}
```
### 🔸 Actualizar un usuario (PUT `/users/:id`)
- **URL:** `http://localhost:4000/api/users/users/690bc077ebfb8a127bc2002a`
**Método:** PUT
- **Body (JSON):**
```json
{
  "password": "74321"
}
```
- **Respuesta esperada: 200 OK**
```json
 {
    "_id": "690bc077ebfb8a127bc2002a",
    "username": "lacho",
    "email": "lacho@gmail.com",
    "password": "74321",
    "__v": 0
}
```

### 🔸 Eliminar una tarea (DELETE `/users/:id`)
- **URL:** `http://localhost:4000/api/users/users/690bc077ebfb8a127bc2002a`
**Método:** DELETE
- **Respuesta esperada: 200 OK**
```json
{
    "message": "Usuario eliminado"
}
```

## Rutas disponibles (Gateway API-AUTH)
## Rutas disponibles
### 🔸 Crear un nuevo usuario (POST `/user`)

- **URL:** `http://localhost:4000/api/auth/auth/user`
- **Método:** POST
- **Body (JSON):**

```json
{
    "username": "ejemplo",
    "password": "fedora"
}
```
- **Respuesta esperada: 201 Created**
```json
{
    "username": "ejemplo",
    "password": "fedora",
    "_id": "690bc757ae0ad86ca5390ba8",
    "__v": 0
}
```
