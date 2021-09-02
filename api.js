// Modulos
const path = require("path"); // Manejo de rutas
const fs = require("fs"); // Manejo de sistema de archivos
const log = console.log;
const chalk = require('chalk');

// funcion para validar la ruta
function validatePath(ruta) {
    return path.isAbsolute(ruta); // Retorna un booleano
}

// funcion para convertir la ruta de relativa a absoluta
const convertPathToAbsolute = (ruta) => (path.resolve(ruta));

// funcion para verificar si la ruta existe
function existPath(ruta) {
    try {
        fs.accessSync(ruta);
        return true;
    } catch (e) {
        return false;
    }
}

// funcion para validar si es archivo
const archive = (ruta) => fs.statSync(ruta).isFile();

//Función que filtra archivos con extención .md
const isMD = (ruta) => (path.extname(ruta) === ".md");

// funcion para verificar si es directorio
const isDirectory = (ruta) => (fs.lstatSync(ruta).isDirectory());

// Funcion para leer directorio 
const readDirectorio = (ruta) => fs.readdirSync(ruta);

// Funcion Obtener todos los archivos md. desde un archivo o directorio, retonando un array de rutas (path
const getAllFiles = (ruta) => {
    // console.log(archive(ruta));

    let arrayFile = [];
    if (archive(ruta)) {
        if (isMD(ruta)) {
            arrayFile.push(ruta);
        }
    } else {
        readDirectorio(ruta).forEach((element) => {
            // path.join -> une varios segementos de la ruta para formar una sola ruta.
            const newPath = path.join(ruta, element);
            const recursive = getAllFiles(newPath);
            arrayFile = arrayFile.concat(recursive);
        });
    }

    return arrayFile;
};


module.exports = {
    validatePath,
    convertPathToAbsolute,
    existPath,
    archive,
    isDirectory,
    isMD,
    readDirectorio,
    getAllFiles
};

// ./pruebas/prueba1.md                         Relativa
// H:/pruebas                                   Absoluta