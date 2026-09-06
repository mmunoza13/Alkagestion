// Importamos el módulo nativo 'fs' para manipulación de archivos
const fs = require('fs');
// Importamos 'path' para construir rutas de archivos de forma segura
const path = require('path');

// Definimos la ruta absoluta al archivo log.txt en la raíz del proyecto
const logFilePath = path.join(__dirname, 'log.txt');

/**
 * Registra una visita en el archivo log.txt
 * @param {string} method - Método HTTP (GET, POST, etc.)
 * @param {string} route - Ruta accedida
 */
const registrarVisita = (method, route) => {
    // Obtenemos la fecha y hora actual
    const ahora = new Date();

    // Formateamos la fecha
    const fecha = ahora.toLocaleDateString('es-ES');
    // Formateamos la hora
    const hora = ahora.toLocaleTimeString('es-ES');

    // Construimos la línea con la estructura mínima requerida
    const linea = `${fecha} | ${hora} | ${method} ${route}\n`;

    // Usamos fs.appendFile() para agregar la línea al final del archivo
    // Si log.txt no existe, lo crea automáticamente
    fs.appendFile(logFilePath, linea, (err) => {
        if (err) {
            console.error('Error al escribir en log.txt:', err);
        }
    });
};

// Exportamos la función para usarla en index.js
module.exports = {
    registrarVisita
};