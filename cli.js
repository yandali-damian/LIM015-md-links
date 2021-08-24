const fs = require('fs');
const fetch = require('node-fetch');
const chalk = require('chalk');
const emoji = require('node-emoji');
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



const mdlinks = (ruta, options) => {

    // console.log(searchLink(ruta));
    const links = searchLink(ruta);

    return new Promise((resolve, reject) => {

        if (links.length > 0) {
            if (options.validate === true && options.stats === true) {
                resolve(optionStatsValidate(links));
                // console.log(optionStatsValidate(links));
            } else if (options.validate === true) {
                Promise.all(optionValidate(links)).then((res) => resolve(res)); //Promise all -> Trabaja todas las promesas de la funcion optionValidate
            } else if (options.stats === true) {
                resolve(optionStats(links));
            } else {
                resolve(renderLinks(links));
            }
        } else {
            // console.log(`\n` + "⏳" + chalk.bold("... No se encontró" + chalk.blue(" links") + " en el archivo❗️ "));
            resolve(["\n " + ruta + chalk.red.bold(" ❌ No se encontró ningun links en el archivo ☹️")]);
        }
    });


}

// funcnion para mostrar los links por defecto cuando no se para una opcion 
const renderLinks = (links) => {
        return links.map(link => {
                    return `\n ${chalk.bold(`${link.file} ${chalk.blue(link.href)} ${link.text}`)}`;
    });
}

//funcion cuando pasamos la opcion --validate
const optionValidate = ((links) => {

    // const statusOK = [200, 301];

    return links.map(link => {
        return fetch(link.href).then(res => { //fetch metodo que devuelve una promesa
            // console.log(res);  
            // if (statusOK.includes(res.status)) {
            if ((res.status >= 200) && (res.status <= 399)) {
                return `${link.file} ${link.text} ${chalk.blue(link.href)} ${res.status} ${chalk.green(res.statusText)}`;
            } else {
                return `${link.file} ${link.text} ${chalk.red(link.href)} ${chalk.red(res.status)} FAIL`;
            }
        }).catch(err => {
            // console.log(err);
            return `${link.file} ${link.text} ${chalk.red(link.href)} 500 FAIL`;
        });
    });

});

const optionStats = ((links) => {

    let newArray = links.map(link => {
        return link.href;
        // console.log(link.href);
    });

    return { Total: newArray.length, Unique : [...new Set(newArray)].length };
    //return `Total: ${newArray.length} \nUnique: ${[...new Set(newArray)].length}`; //construir una arreglo de b
    // onsole.log(newArray.length);
    // console.log([...new Set(newArray)].length);c
});

const optionStatsValidate = ((links) => {
    let contBroken = 0;

    let newArray = links.map(link => {
        return link.href;
        // console.log(link.href);
    });

    return Promise.all(
        newArray.map(href => {
            return fetch(href).then(res => {
                return res.statusText;
            }).catch(err => { return "FAIL"; });
        }),
    ).then(res => {
        // console.log({ res });
        // console.log(res.filter(broquen => {
        //     return broquen === 'FAIL';
        // }).length);

        contBroken = res.filter(broquen => {
            return broquen === 'FAIL';
        }).length;
        return { Total: newArray.length, Unique: [...new Set(newArray)].length, Broquen:contBroken };
        //return `Total: ${newArray.length} \nUnique: ${[...new Set(newArray)].length} \nBroquen:${contBroken}`;
    });
});

module.exports = {
    searchLink,
    mdlinks
};