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
const { mdlinks } = require('./cli');
const log = console.log;

module.exports = () => {
    // ...
};

// log(process.env);
//log(process.argv);

//Variables
let ruta = process.argv[2];
let opcionValidateOrStats = process.argv[3];
let opcionStats = process.argv[4];

const isAbsolute = validatePath(ruta);
// log(isAbsolute);
if (!isAbsolute) {
    // No es Absoluta entonces convertirlo
    ruta = convertPathToAbsolute(ruta); // Convertir ruta relativa en absoluta
    // log(ruta)
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

        // log(chalk `{bold.rgb(50,500,00) Es un Archivo!}`);
        if (esMD) {

            if (opcionValidateOrStats == "--help") {
                log("ayuda");
            } else if (opcionValidateOrStats === "--validate" && opcionStats === "--stats") {
                mdlinks(ruta, { validate: true, stats: true }).then((arrayLinks) => { //Resolve                    
                    // arrayLinks.forEach((link) => log(link));
                    log(arrayLinks);
                }).catch((err) => { // Reject
                    log(err);
                });
            } else if (opcionValidateOrStats === "--validate") {
                mdlinks(ruta, { validate: true }).then((arrayLinks) => { //Resolve                   
                    arrayLinks.forEach((link) => log(link));
                }).catch((err) => { // Reject
                    log(err);
                });
            } else if (opcionValidateOrStats === "--stats") {
                mdlinks(ruta, { stats: true }).then((arrayLinks) => { //Resolve
                    // log(arrayLinks);
                    // arrayLinks.forEach((link) => log(link));
                    log(arrayLinks);
                }).catch((err) => { // Reject
                    log(err);
                });
            } else {
                mdlinks(ruta, { validate: false }).then((arrayLinks) => { //Resolve
                    arrayLinks.forEach((link) => log(link));
                }).catch((err) => { // Reject
                    log(err);
                });
            }

        } else {
            log('No es un archivo MD');
        }
    }
} else {
    log('No existe la ruta');
}