// importando paquetes de node.js
const chalk = require('chalk'); //dependencia para color y tipo de letra 
const fetch = require('fetch'); //Obtener el contenido de la URL
const figlet = require('figlet');
const {
    validatePath,
    convertPathToAbsolute,
    existPath,
    isDirectory,
    isMD
} = require('./api');
const { searchLink } = require('./cli');
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
        log(chalk `{bold.rgb(90,700,900) Es un directorio!}`);
    } else {
        // Trabajamos con un archivo
        const esMD = isMD(ruta);

        log(chalk `{bold.rgb(50,500,00) Es un Archivo!}`);
        if (esMD) {
            const search = searchLink(ruta);
            search.then((messaje) => {
                log(messaje);
            });
        } else {
            log('No es un archivo MD');
        }
    }
} else {
    log('No existe la ruta');
}