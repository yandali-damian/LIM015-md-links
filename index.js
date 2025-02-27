#!/usr/bin/env node

// importando paquetes de node.js
const chalk = require('chalk'); //dependencia para color y tipo de letra
const colors = require('colors');

const {
    validatePath,
    convertPathToAbsolute,
    existPath,
    isDirectory,
    isMD,
    // readDirectorio,
    getAllFiles
} = require('./api');
const { mdlinks } = require('./mdlinks');
const log = console.log;

// log(process.env);
//log(process.argv);

//Variables
let ruta = process.argv[2];
let opcionValidateOrStats = process.argv[3];
let opcionStats = process.argv[4];
let opcionCualquiera = process.argv[5];

const help = `\n**********************************************************************************************************************************
${colors.cyan.bold('Puede usar las siguientes opciones:')}
${colors.yellow('--stats')} se utiliza para obtener el número total de links y los que no se repiten (links únicos).
${colors.green('--validate')} se utiliza para validar cada link (si es OK o FAIL, dependiendo del estado) también obtener su href, texto y archivo.
${colors.magenta('--stats --validate')} Tambien puede ingresar ambas opciones y obtendra como resultado el total de links, únicos y rotos
En caso de que no use ninguna opción, solo debe ingresar la${colors.cyan(' ruta')} y tendra como resultado href, el texto y el archivo de cada link.
**********************************************************************************************************************************`;

const isAbsolute = validatePath(ruta);
// log(isAbsolute);
if (!isAbsolute) {
    // No es Absoluta entonces convertirlo
    ruta = convertPathToAbsolute(ruta); // Convertir ruta relativa en absoluta
    // log(ruta)
}

const exist = existPath(ruta);

if (exist) { // Existe la ruta    

    let archivosParaProcesar = getAllFiles(ruta);

    //Validaciones
    if (opcionValidateOrStats === "--validate" && opcionStats === "--stats" && opcionCualquiera === undefined) { //Reglas de Opcion
        log(chalk.red.bold('\n❌ Orden incorrecto de opciones... ☝️ '));
    } else if (opcionValidateOrStats == "--help" && opcionStats == undefined) { //
        log(help);
    } else if (archivosParaProcesar.length > 0) {
        if (opcionValidateOrStats === "--stats" && opcionStats === "--validate" && opcionCualquiera === undefined) {
            Promise.all(
                archivosParaProcesar.map(rutaLeer => {
                    return mdlinks(rutaLeer, { stats: true, validate: true }).then((arrayLinks) => { //Resolve                    
                        // arrayLinks.forEach((link) => log(link));
                        return arrayLinks;
                    }).catch((err) => { // Reject
                        log(err);
                    });
                })
            ).then(res => {
                // log(res);
                //Totalizado
                const total = res.map(item => item.Total).reduce((a, b) => a + b);
                const unique = res.map(item => item.Unique).reduce((a, b) => a + b);
                const broquen = res.map(item => item.Broquen).reduce((a, b) => a + b);
                log(`Total: ${total} \nUnique: ${unique} \nBroquen: ${broquen}`);
            });

        } else if (opcionValidateOrStats === "--validate" && opcionStats === undefined) {
            archivosParaProcesar.forEach(rutaLeer => {
                mdlinks(rutaLeer, { validate: true }).then((arrayLinks) => { //Resolve                   
                    arrayLinks.forEach((link) => log(link));
                }).catch((err) => { // Reject
                    log(err);
                });
            });
        } else if (opcionValidateOrStats === "--stats" && opcionStats === undefined) {
            Promise.all(
                archivosParaProcesar.map(rutaLeer => {
                    return mdlinks(rutaLeer, { stats: true }).then((arrayLinks) => { //Resolve
                        // log(arrayLinks);
                        return arrayLinks;
                    }).catch((err) => { // Reject
                        log(err);
                    })
                })
            ).then(res => {
                //Totalizado
                const total = res.map(item => item.Total).reduce((a, b) => a + b);
                const unique = res.map(item => item.Unique).reduce((a, b) => a + b);
                log(`Total: ${total} \nUnique: ${unique}`);
            });
        } else if (opcionValidateOrStats === undefined) {
            archivosParaProcesar.forEach(rutaLeer => {
                mdlinks(rutaLeer, { validate: false }).then((arrayLinks) => { //Resolve
                    arrayLinks.forEach((link) => log(link));
                }).catch((err) => { // Reject
                    log(err);
                });
            });
        } else {
            log(chalk.red.bold('\n❌ Opcion incorrecto revisar ayuda usando --help ☝️ '));
        }
    } else {
        log(chalk.red.bold('\n ❌ No existe archivos MD por procesar ✋'));
    }

} else {
    log(chalk.red.bold('\n ❌ No existe la ruta ✋'));
}