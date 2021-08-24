const {
    searchLink,
    mdlinks
} = require('../cli');
//  ******************** VARIABLES PARA EL TEST  agregar un nuevo archivo para las variables ********************
const validateFalse = [{
        text: 'Arreglos',
        href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
        file: 'H:/Laboratoria/MD-links/LIM015-md-links/pruebas/prueba1.md'
    },
    {
        text: 'Array - MDN',
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
        file: 'H:/Laboratoria/MD-links/LIM015-md-links/pruebas/prueba1.md'
    }
];

// ********************** test de CLI **********************
describe('searchLink', () => {

    const ruta = [{
            text: 'Arreglos',
            href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
            file: 'H:/Laboratoria/MD-links/LIM015-md-links/pruebas/prueba1.md'
        },
        {
            text: 'Array - MDN',
            href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
            file: 'H:/Laboratoria/MD-links/LIM015-md-links/pruebas/prueba1.md'
        },
        {
            text: 'Google',
            href: 'https://www.googleeeee.co/',
            file: 'H:/Laboratoria/MD-links/LIM015-md-links/pruebas/prueba1.md'
        },
        {
            text: 'Arreglos',
            href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
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

    it('Es una función', () => {
        expect(typeof mdlinks).toBe('function');
    });

    test('', () => {
        expect(searchLink("H:/Laboratoria/MD-links/LIM015-md-links/pruebas/prueba1.md")).toEqual(validateFalse);
    });

});