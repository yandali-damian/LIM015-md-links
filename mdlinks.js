const chalk = require('chalk');
const fs = require('fs');

const {
    searchLink,
    renderLinks,
    optionValidate,
    optionStats,
    optionStatsValidate
} = require('./cli');


const mdlinks = (ruta, options) => {

    // console.log(searchLink(ruta));
    const links = searchLink(ruta);

    return new Promise((resolve, reject) => {

        if (options.validate === true && options.stats === true) {
            resolve(optionStatsValidate(links));
            // console.log(optionStatsValidate(links));
        } else if (options.validate === true) {
            if (links.length > 0) {
                Promise.all(optionValidate(links)).then((res) => resolve(res)); //Promise all -> Trabaja todas las promesas de la funcion optionValidate
            } else {
                resolve(["\n " + ruta + chalk.red.bold(" ❌ No se encontró ningun links en el archivo ☹️")]);
            }
        } else if (options.stats === true) {
            resolve(optionStats(links));
        } else {
            if (links.length > 0) {
                resolve(renderLinks(links));
            } else {
                resolve(["\n " + ruta + chalk.red.bold(" ❌ No se encontró ningun links en el archivo ☹️")]);
            }
        }

    });


}

module.exports = { mdlinks };