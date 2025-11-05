# API Gateway · Sistema de Microservicios 
 
El sistema consta de tres APIs en arquitectura distribuida, cada una ejecutándose como servicio independiente:

- **Auth API** – Registro, inicio de sesión y emisión de tokens JWT.  
- **Users API** – Gestión de usuarios (CRUD, perfil, roles, etc.).  
- **API Gateway** – Punto de entrada centralizado que recibe las solicitudes del cliente, valida el token y enruta hacia la Auth API o la Users API según corresponda.

---

### 🧩 ¿Por qué este diseño?  
El objetivo es crear una arquitectura basada en microservicios, donde cada API sea responsable de un dominio específico, pero el cliente solo interactúe con un **único endpoint**: el Gateway. Esto mejora la escalabilidad, separación de responsabilidades, mantenimiento, y el control del tráfico.

---

### 🛠 Tecnologías utilizadas  
- Node.js con Express  
- WebSockets (para chat en tiempo real)  
- JWT para autenticación  
- MongoDB como base de datos por servicio  
- Docker / Docker Compose para despliegue local  
- Frontend (React) para consumo del sistema  

---

### 📁 Estructura del proyecto  

**Api Gateway**

- **Api_Autentificacion/** ← Microservicio de autenticación
- **Api_Gateway/** ← Microservicio de usuarios
- **Api_Users/** ← Microservicio Gateway (orquestador)
- README.md ← Este README principal

---

## Cómo usar el proyecto

Se recomienda primero configurar y levantar **Api_Autentificacion** y **Api_Users** para ejecutar **Api_Gateway**
### Api_Autentificacion*

- Documentación completa y pasos de instalación en:  
  [Api_Autentificacion/README.md](Api_Autentificacion/README.md)

### Api_Gateway

- Documentación completa y pasos de instalación en:  
  [Api_Gateway/README.md](Api_Gateway/README.md)

### Api_Users

- Documentación completa y pasos de instalación en:  
  [Api_Users/README.md](Api_Users/README.md)

---
