const fs = require('fs');
// resolve= retornar la respuesta
// reject=retornar el error
const searchLink = (ruta) => {

    return new Promise((resolve, reject) => {

        try {
            let dataMd = fs.readFileSync(ruta).toString(); //lee el archivo
            let links = []; //array de salida
            let expRegLink = /\[((.+?))\]\((http|https).+?\)/g; //leer enlaces del archivo md
            const expRegHref = /\((http|https).+?\)/g; //leer url del enlace
            const expRegLinktext = /\[.+?\]/g; //leer texto del enlace
            let linksMD = dataMd.match(expRegLink);
            linksMD.forEach(link => {
                let txtLinkMd = link.match(expRegLinktext)[0].substring(1, link.match(expRegLinktext)[0].length - 1);
                let urlLinkMd = link.match(expRegHref)[0].substring(1, link.match(expRegHref)[0].length - 1);
                //Este codigo agrega array un objetos con las siguientes propiedades
                links.push({
                    text: txtLinkMd,
                    href: urlLinkMd,
                    file: ruta
                });
            });

            resolve(links);
        } catch (error) {
            reject(error); //cae el error
        }
    });
}

module.exports = {
    searchLink
};