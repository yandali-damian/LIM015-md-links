// Modulos
const path = require("path"); // Manejo de rutas
const fs = require("fs"); // Manejo de sistema de archivos

// funcion para validar la ruta
function validatePath(ruta) {
    return path.isAbsolute(ruta); // Retorna un booleano
}

// funcion para convertir la ruta de relativa a absoluta
function convertPathToAbsolute(ruta) {
    return path.resolve(ruta); // Retorna un string
}

// funcion para verificar si la ruta existe
function existPath(ruta) {
    try {
        fs.accessSync(ruta);
        return true;
    } catch (e) {
        return false;
    }
}

// funcion para verificar si es directorio
function isDirectory(ruta) {
    return fs.lstatSync(ruta).isDirectory();
}

//Función que filtra archivos con extención .md
const isMD = (ruta) => (path.extname(ruta) === ".md");

// Funcion para leer directorio 
//const readDirectorio = (ruta) => fs.readdirSync(ruta);

// funcion para leer archivo .md y extraer los link




module.exports = {
    validatePath,
    convertPathToAbsolute,
    existPath,
    isDirectory,
    isMD
};

// ./pruebas/prueba1.md                         Relativa
// H:/pruebas                                   Absoluta