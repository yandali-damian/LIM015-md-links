// importando paquetes de node.js
const chalk = require('chalk'); //dependencia para color y tipo de letra 
const fetch = require('fetch'); //Obtener el contenido de la URL
const figlet = require('figlet');

const { validatePath, convertPathToAbsolute, existPath, isDirectory } = require('./cli');

const log = console.log;

module.exports = () => {
    // ...
};

// log(process.env);
//log(process.argv);

//Variables
let ruta = process.argv[2];
let opcionStatsOrValidate1 = process.argv[3];
let opcionStatsOrValidate2 = process.argv[4];

const isAbsolute = validatePath(ruta);
if (!isAbsolute) {
    // No es Absoluta entonces convertirlo
    ruta = convertPathToAbsolute(ruta); // Convertir ruta relativa en absoluta
}

const exist = existPath(ruta);

if (exist) { // Existe la ruta    
    const esDirectorio = isDirectory(ruta);
    if (esDirectorio) {
        // Trabajamos con un directorio
        log('Es un directorio');
    } else {
        // Trabajamos con un archivo
        log('Es un archivo');
    }
} else {
    log('No existe la ruta');
}