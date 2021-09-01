const chalk = require('chalk');
const {
    searchLink,
    mdlinks
} = require('../mdlinks');

// const array = [{
//     file: 'H:\\Laboratoria\\MD-links\\LIM015-md-links\\pruebas\\pruebas1\\OTRA\\nuevo.md',
//     href: 'https://platzi.com/clases/html5-css3/',
//     status: '403',
//     statusText: 'FAIL',
//     text: 'html5 css3'

// }];
describe('searchLink', () => {

    const ruta = [{
            text: 'facebook',
            href: 'https://www.facebook.com/',
            file: 'H:/Laboratoria/MD-links/LIM015-md-links/pruebas/prueba1.md'
        },
        {
            text: 'WebSite',
            href: 'http://mywebsite/api/user/13',
            file: 'H:/Laboratoria/MD-links/LIM015-md-links/pruebas/prueba1.md'
        },
        {
            text: 'html5 css3',
            href: 'https://platzi.com/clases/html5-css3/',
            file: 'H:/Laboratoria/MD-links/LIM015-md-links/pruebas/prueba1.md'
        }
    ];

    it('Es una función', () => {
        expect(typeof searchLink).toBe('function');
    });

    it('Al recorrer el rchivo MD debera retornar la funcion searchLink un Array de objetos de los links ', () => {
        expect(searchLink("H:/Laboratoria/MD-links/LIM015-md-links/pruebas/prueba1.md")).toEqual(ruta);
    });

    it('Si no existe links en el archivo debera retornar array vacio []', () => {
        expect(searchLink("H:/Laboratoria/MD-links/LIM015-md-links/pruebas/prueba2.md")).toEqual([]);
    });

});

describe('mdlinks', () => {

            const ruta = "H:\\Laboratoria\\MD-links\\LIM015-md-links\\pruebas\\pruebas1\\OTRA\\nuevo.md";

            const validateTrue = [`${chalk.rgb(40, 255, 191)("H:\\Laboratoria\\MD-links\\LIM015-md-links\\pruebas\\pruebas1\\OTRA\\nuevo.md")} ${chalk.rgb(188, 255, 185)("https://platzi.com/clases/html5-css3/")} ${chalk.red("403")} ${chalk.red("FAIL")} ${chalk.rgb(247, 230, 173)("html5 css3")}`];

            const linksExiste = [`${chalk.bold(`${"H:\\Laboratoria\\MD-links\\LIM015-md-links\\pruebas\\pruebas1\\OTRA\\nuevo.md"} ${chalk.blue("https://platzi.com/clases/html5-css3/")} ${"html5 css3"}`)}`];

    const statsTrue = { "Total": 1, "Unique": 1 }

    const statsValidateTrue = { "Total": 1, "Unique": 1, "Broquen": 1 };

    const ruta2 = "H:\\Laboratoria\\MD-links\\LIM015-md-links\\pruebas\\prueba2.md";

    const linksVacio = [`${ruta2}${chalk.red.bold(" ❌  No se encontró ningun links en el archivo  ☹️")}`];

    it('Es una función', () => {
        expect(typeof mdlinks).toBe('function');
    });
    test("cuando ingresamos validate true debe retornar la respuesta del links", () => {
        return mdlinks(ruta, { validate: true }).then((response) => {
            expect(response).toEqual(validateTrue);
        });
    });

    test("cuando ingresamos validate true debe retornar la respuesta del links", () => {
        return mdlinks(ruta, { stats: true }).then((response) => {
            expect(response).toEqual(statsTrue);
        });
    });

    test("cuando ingresamos  stats true y validate true debe retornar la respuesta del links", () => {
        return mdlinks(ruta, { stats: true, validate: true }).then((response) => {
            expect(response).toEqual(statsValidateTrue);
        });
    });

    test("cuando ingresamos un archivo y no existe links debera retoernarnos un sms indicando que no hay links", () => {
        return mdlinks(ruta2, { validate: true }).then((response) => {
            expect(response).toEqual(linksVacio);
        });
    });

    test("cuando ingresamos un archivo y no existe links y no colocamos ninguna opcion", () => {
        return mdlinks(ruta2, {}).then((response) => {
            expect(response).toEqual(linksVacio);
        });
    });

    test("cuando ingresamos una ruta", () => {
        return mdlinks(ruta, {}).then((response) => {
            expect(response).toEqual(linksExiste);
        });
    });

});