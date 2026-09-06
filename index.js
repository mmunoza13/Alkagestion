// Importamos dotenv para manejar variables de entorno
const dotenv = require('dotenv');
dotenv.config();

// Importamos Express, el framework web para Node.js
const express = require('express');
// Importamos path para manejar rutas de archivos de forma segura entre sistemas operativos
const path = require('path');
// Importamos nuestro módulo de logger
const logger = require('./logger.js');
// Importamos el router externo
const router = require('./router.js');


// Creamos la instancia de Express
const app = express();

// Configuramos EJS como motor de plantillas para vistas dinámicas
app.set('view engine', 'ejs');
// Indicamos dónde están las vistas (carpeta views en la raíz)
app.set('views', path.join(__dirname, 'views'));

// Servimos archivos estáticos desde la carpeta /public
// Esto permite acceder a CSS, imágenes, JS del cliente directamente
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para registrar cada visita al servidor
app.use((req, res, next) => {
    logger.registrarVisita(req.method, req.originalUrl);
    next();
});

// Conectamos el router externo con la aplicación
// Todas las rutas definidas en router.js estarán disponibles desde la raíz '/'
app.use('/', router);


// ============================================
// LEVANTAR SERVIDOR
// ============================================

// Obtenemos el puerto desde las variables de entorno, o usamos 3000 por defecto
const PORT = process.env.PORT || 3000;

// Levantamos el servidor en el puerto configurado
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});