# Alkagestion

Aplicación web de gestión de usuarios y datos desarrollada con Node.js y Express.

## 📋 Requisitos del sistema

- **Node.js** v18 o superior ([Descargar aquí](https://nodejs.org/))
- **npm** v9 o superior (viene con Node.js)
- Sistema operativo: Windows, macOS o Linux


0. Para verificar tu versión de Node.js, ejecuta:
   ```bash
   node -v
   npm -v
  

##  Instalacion

1. Clona este repositorio en tu máquina local:
   ```bash
   https://github.com/mmunoza13/Alkagestion
  
2. Instala las dependencias:
   ```bash 
      npm install

3. Crea un archivo .env en la raíz del proyecto con el siguiente contenido:
   ```bash 
   PORT=3000
   NODE_ENV=development 


##  Modo de uso

1. Modo desarrollo (con recarga automática)
   ```bash
   npm run dev

2. Modo desarrollo (con recarga automática)
   ```bash
   npm start

El servidor estará disponible en http://localhost:3000 o el puerto seleccionado en el archivo .env

##  Endpoints disponibles
 Ruta         Metodo   Descripcion            Respuesta
 /            GET      Pagina de inicio       HTML
 /status      GET      Estado del servidor    HTML
 /status/json GET      Estado en formato JSON JSON

##  Ejemplo de respuesta /status/json:
 {
  "status": "success",
  "message": "El servidor está funcionando correctamente",
  "data": {
    "uptime": 12.345,
    "timestamp": "2026-09-06T15:30:00.000Z",
    "environment": "development"
  }
 }


##  Logs

Cada visita a cualquier ruta se registra automáticamente en log.txt con el formato:

 DD/MM/YYYY | HH:MM:SS | MÉTODO RUTA

 Ejemplo:
   6/9/2026 | 15:30:12 | GET /
   6/9/2026 | 15:30:15 | GET /status/json

##  Pruebas

Inicia el servidor: npm run dev
Abre en el navegador:
http://localhost:3000/ → Vista EJS dinámica
http://localhost:3000/status → Estado en HTML
http://localhost:3000/status/json → Estado en JSON
Revisa el archivo log.txt para ver las visitas registradas

## Autor

Desarrollado por Manuel Muñoz como parte de un ejercicio práctico de desarrollo web frontend

---
© 2026 Manuel Muñoz. Todos los derechos reservados.
