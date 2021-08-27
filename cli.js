const fs = require('fs');
const fetch = require('node-fetch'); //Obtener el contenido de la URL
const chalk = require('chalk');
// resolve= retornar la respuesta
// reject=retornar el error

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


// funcnion para mostrar los links por defecto cuando no se ingresa una opcion 
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
            if ((res.status >= 200) && (res.status <= 399)) {
                // return `\n✔️  ${link.file} ${link.text} ${chalk.blue(link.href)} ${res.status} ${chalk.green(res.statusText)}`;
            return `${chalk.rgb(40, 255, 191)(link.file)} ${chalk.rgb(188, 255, 185)(link.href)} ${chalk.rgb(2, 252, 99)(res.status)} ${chalk.rgb(2, 252, 99)(res.statusText)} ${chalk.rgb(247, 230, 173)(link.text)}`
            } else {
                // return `\n❌ ${link.file} ${link.text} ${chalk.red(link.href)} ${chalk.red(res.status)} FAIL`;
                return `${chalk.rgb(40, 255, 191)(link.file)} ${chalk.rgb(188, 255, 185)(link.href)} ${chalk.red(res.status)} ${chalk.red("FAIL")} ${chalk.rgb(247, 230, 173)(link.text)}`;
            }
        }).catch(err => {
            // console.log(err);
            // return `\n❌ ${link.file} ${link.text} ${chalk.red(link.href)} 500 FAIL`;
            return `${chalk.rgb(40, 255, 191)(link.file)} ${chalk.rgb(188, 255, 185)(link.href)} ${chalk.rgb(255, 0, 0)("500 FAIL")} ${chalk.rgb(247, 230, 173)(link.text)}`;
        });
    });
});

//funcion cuando pasamos la opcion --stats
const optionStats = ((links) => {
    let newArray = links.map(link => {
        return link.href;
        // console.log(link.href);
    });

    return {Total: newArray.length, Unique : [...new Set(newArray)].length};
});

//funcion cuando pasamos la opcion --stats --validate
const optionStatsValidate = ((links) => {
    let contBroken = 0;

    let newArray = links.map(link => {
        return link.href;
        // console.log(link.href);
    });

    return Promise.all(
        newArray.map(href => {
            return fetch(href).then(res => {
                if ((res.status >= 200) && (res.status <= 399)){
                    return res.statusText;
                }else{                    
                    return 'FAIL';
                }
            }).catch(err => { return "FAIL"; });
        }),
    ).then(res => {
        // console.log(res);
        contBroken = res.filter(broquen => {
            return broquen === 'FAIL';
        }).length;
        return { Total: newArray.length, Unique: [...new Set(newArray)].length, Broquen:contBroken };
    });
});

module.exports = {
    searchLink,
    renderLinks,
    optionValidate,
    optionStats,
    optionStatsValidate
};