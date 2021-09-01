const fs = require('fs');
const fetch = require('node-fetch'); //Obtener el contenido de la URL
const chalk = require('chalk');
// resolve= retornar la respuesta
// reject=retornar el error



// funcnion para mostrar los links por defecto cuando no se ingresa una opcion 
const renderLinks = (links) => {
        return links.map(link => {
                    return `${chalk.bold(`${link.file} ${chalk.blue(link.href)} ${link.text}`)}`;
    });
}

//funcion cuando pasamos la opcion --validate
const optionValidate = ((links) => {

    return links.map(link => {
        return fetch(link.href).then(res => { //fetch metodo que devuelve una promesa
            // console.log(res);  
            if ((res.status >= 200) && (res.status <= 399)) {
                return `${chalk.rgb(40, 255, 191)(link.file)} ${chalk.rgb(188, 255, 185)(link.href)} ${chalk.rgb(2, 252, 99)(res.status)} ${chalk.rgb(2, 252, 99)(res.statusText)} ${chalk.rgb(247, 230, 173)(link.text)}`
            } else {
                return`${chalk.rgb(40, 255, 191)(link.file)} ${chalk.rgb(188, 255, 185)(link.href)} ${chalk.red(res.status)} ${chalk.red("FAIL")} ${chalk.rgb(247, 230, 173)(link.text)}`;

            }
        }).catch(err => {
            // console.log(err);
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
    renderLinks,
    optionValidate,
    optionStats,
    optionStatsValidate
};