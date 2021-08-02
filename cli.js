// Modulos
const path = require("path"); // Manejo de rutas
const fs = require("fs"); // Manejo de sistema de archivos

function validatePath(ruta) {
    return path.isAbsolute(ruta); // Retorna un booleano
}

function convertPathToAbsolute(ruta) {
    return path.resolve(ruta); // Retorna un string
}

function existPath(ruta) {
    try {
        fs.accessSync(ruta);
        return true;
    } catch (e) {
        return false;
    }
}

function isDirectory(ruta) {
    return fs.lstatSync(ruta).isDirectory();
}

module.exports = {
    validatePath,
    convertPathToAbsolute,
    existPath,
    isDirectory
};

// ./pruebas/prueba1.md                         Relativa
// H:/pruebas                                   Absoluta