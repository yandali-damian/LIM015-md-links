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

//Función que filtra archivos con extención .md
const isMD = (ruta) => (path.extname(ruta) === ".md");


// funcion para verificar si es directorio
function isDirectory(ruta) {
    return fs.lstatSync(ruta).isDirectory();
}

// Funcion para leer directorio 
const readDirectorio = (ruta) => {
    let dirContent = fs.readdirSync(ruta); //Leer Directorio

    const filesMD = dirContent.filter(elem => { //Buscar todos los archivos MD
        return isMD(elem);
    });

    //console.log(filesMD);
    return filesMD.map(md => path.join(ruta, md)); //Unir con la ruta directorio a cada nombre de archivo
};


module.exports = {
    validatePath,
    convertPathToAbsolute,
    existPath,
    isDirectory,
    isMD,
    readDirectorio
};

// ./pruebas/prueba1.md                         Relativa
// H:/pruebas                                   Absoluta