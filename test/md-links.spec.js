const {
    validatePath,
    convertPathToAbsolute,
    existPath,
    isDirectory
} = require('../api');


// describe('mdLinks', () => {

//     it('should...', () => {
//         console.log('FIX ME!');
//     });

// });

describe('validatePath', () => {

    it('Es una función', () => {
        expect(typeof validatePath).toBe('function');
    });

    it('Debería retornar true', () => {
        expect(validatePath("H:/Laboratoria/MD-links/LIM015-md-links/pruebas/prueba1.md")).toBe(true);
    });

    it('Debería retornar false', () => {
        expect(validatePath("./MD-links/LIM015-md-links/pruebas/prueba1.md")).toBe(false);
    });

});

describe('convertPathToAbsolute', () => {

    it('Es una función', () => {
        expect(typeof convertPathToAbsolute).toBe('function');
    });

    it('Deberia retornar ruta Absoluta', () => {
        expect(convertPathToAbsolute('pruebas/prueba1.md')).toBe(`H:\\Laboratoria\\MD-links\\LIM015-md-links\\pruebas\\prueba1.md`);
    });

});

describe('existPath', () => {

    it('Es una función', () => {
        expect(typeof existPath).toBe('function');
    });


    it('La ruta no existe debería retornar false', () => {
        expect(existPath("X:/Laboratoria/MD-links/LIM015-md-links/pruebas/prueba1.md")).toBe(false);
    });

    it('La ruta si existe debería retornar True', () => {
        expect(existPath("H:/Laboratoria/MD-links/LIM015-md-links/pruebas/prueba1.md")).toBe(true);
    });

});

describe('isDirectory', () => {

    it('Es una función', () => {
        expect(typeof isDirectory).toBe('function');
    });

    it('Si es un Directorio debería retornar True', () => {
        expect(isDirectory("H:/Laboratoria/MD-links/LIM015-md-links")).toBe(true);
    });

    it('Si es un Archivo debería retornar False', () => {
        expect(isDirectory("H:/Laboratoria/MD-links/LIM015-md-links/pruebas/prueba1.md")).toBe(false);
    });


});