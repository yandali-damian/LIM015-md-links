const fs = require('fs');
// resolve= retornar la respuesta
// reject=retornar el error
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

const mdlinks = (ruta, options = {}) => {
    const links = searchLink(ruta);

    return new Promise((resolve, reject) => {
        if (options.validate === true && options.stats === true) {
            resolve("validate and stats");
        } else if (options.validate === true) {
            resolve("validate");
        } else if (options.stats === true) {
            resolve("stats");
        } else {
            resolve(renderLinks(links));
        }
    });
}

const renderLinks = (links) => {
    return links.map(link => {
        return `${link.file} ${link.text} ${link.href}`;
    });
}

module.exports = {
    searchLink,
    mdlinks
};