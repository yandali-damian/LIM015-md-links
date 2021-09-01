const chalk = require('chalk');
const fs = require('fs');

const {
    renderLinks,
    optionValidate,
    optionStats,
    optionStatsValidate
} = require('./cli');

//funcion para extraer el links
const searchLink = (ruta) => {
    let links = []; //array de salida

    let dataMd = fs.readFileSync(ruta).toString(); //Leer Archivo

    let expRegLink = /\[((.+?))\]\((http|https).+?\)/g; //Expresion Regular para enlaces
    const expRegHref = /\((http|https).+?\)/g; //Expresion Regular para Url
    const expRegLinktext = /\[.+?\]/g; //Expresion Regular para texto

    let linksMD = dataMd.match(expRegLink); // Buscar todos los links

    if (linksMD != null) {
        linksMD.forEach(link => {
            // console.log(link);
            let txtLinkMd = link.match(expRegLinktext)[0].substring(1, link.match(expRegLinktext)[0].length - 1);
            let urlLinkMd = link.match(expRegHref)[0].substring(1, link.match(expRegHref)[0].length - 1);
            //Este codigo agrega array un objetos con las siguientes propiedades
            links.push({
                text: txtLinkMd,
                href: urlLinkMd,
                file: ruta
            });
        });
    }

    return links;
}


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
                resolve([ruta + chalk.red.bold(" ❌  No se encontró ningun links en el archivo  ☹️")]);
            }
        } else if (options.stats === true) {
            resolve(optionStats(links));
        } else {
            if (links.length > 0) {
                resolve(renderLinks(links));
                // console.log(renderLinks(links));
            } else {
                resolve([ruta + chalk.red.bold(" ❌  No se encontró ningun links en el archivo  ☹️")]);
            }
        }

    });


}

module.exports = { mdlinks, searchLink };