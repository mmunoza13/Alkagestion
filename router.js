// Importamos el Router de Express para definir rutas de forma modular
const { Router } = require('express');

// Creamos una instancia del Router
const router = Router();

// ============================================
// RUTA RAÍZ (/) - Vista dinámica con EJS
// ============================================
router.get('/', (req, res) => {
    // Renderizamos la vista 'index.ejs' pasando datos dinámicos
    res.render('index', {
        title: 'Inicio - User Data Manager',
        // Pasamos la fecha actual como dato dinámico para demostrar EJS
        currentDate: new Date().toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    });
});

// ============================================
// RUTA /status - Devuelve HTML
// ============================================
router.get('/status', (req, res) => {
    // Renderizamos una vista EJS con datos del servidor
    res.render('status', {
        title: 'Estado del Servidor',
        uptime: process.uptime(),
        timestamp: new Date().toLocaleString('es-ES'),
        environment: process.env.NODE_ENV || 'development'
    });
});

// ============================================
// RUTA /status/json - Devuelve JSON
// ============================================
router.get('/status/json', (req, res) => {
    // Devolvemos JSON con el formato consistente: { status, message, data }
    res.status(200).json({
        status: 'success',
        message: 'El servidor está funcionando correctamente',
        data: {
            uptime: process.uptime(),
            timestamp: new Date().toISOString(),
            environment: process.env.NODE_ENV || 'development'
        }
    });
});

// Exportamos el router para usarlo en index.js
module.exports = router;