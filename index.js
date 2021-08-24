// importando paquetes de node.js
const chalk = require('chalk'); //dependencia para color y tipo de letra 
const fetch = require('fetch'); //Obtener el contenido de la URL
const figlet = require('figlet');
const colors = require('colors');
const { emoji } = require('node-emoji');

const {
    validatePath,
    convertPathToAbsolute,
    existPath,
    isDirectory,
    isMD
} = require('./api');
const { mdlinks } = require('./cli');
const log = console.log;

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

const help = `**********************************************************************************************************************************
${colors.cyan.bold('Puede usar las siguientes opciones:')}
${colors.yellow('--stats')} se utiliza para obtener el número total de links y los que no se repiten (links únicos).
${colors.green('--validate')} se utiliza para validar cada link (si es OK o FAIL, dependiendo del estado) también obtener su href, texto y archivo.
${colors.magenta('--stats --validate')} Tambien puede ingresar ambas opciones y obtendra como resultado el total de links, únicos y rotos
En caso de que no use ninguna opción, solo debe ingresar la${colors.cyan(' ruta')} y tendra como resultado href, el texto y el archivo de cada link.
**********************************************************************************************************************************`;

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

            if (opcionValidateOrStats === "--validate" && opcionStats === "--stats") { //Reglas de Opcion
                log(chalk.red.bold('\n❌ Orden incorrecto de opciones... ☝️ '));
            } else {
                if (opcionValidateOrStats == "--help") {
                    log(help);

                } else if (opcionValidateOrStats === "--stats" && opcionStats === "--validate") {
                    mdlinks(ruta, { stats: true, validate: true }).then((arrayLinks) => { //Resolve                    
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
            }

        } else {
            log(chalk.red.bold('\n ❌ No es un archivo .MD ✉️'));
        }
    }
} else {
    log(chalk.red.bold('\n ❌ No existe la ruta ✋'));
}