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


| Método | Ruta         | Descripción                    |
|--------|--------------|--------------------------------|
|                      API-USERS                         |
| POST   | `/users`     | Crear un nuevo usuario         |
| GET    | `/users`     | Obtener todos los usuarios     |
| GET    | `/username/:username` | Obtener un usuario por el nombre de usuario   |
| GET    | `/users/:id` | Obtener un usuario por el id |
| PUT | `/users/:id` | Editar un usuario             |
| DELETE | `/users/:id` | Eliminar un usuario             |
|                        API-AUTH                                      |
| GET    | `/users`           | Obtener todos los usuarios     |
| GET    | `/saludo-protegido`| Mostrar el mensaje oculto      |
| POST    | `/user`           | Crear un usuario nuevo         |
| POST   | `/login`           | Inicio de sesion               |



