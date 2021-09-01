const {
    validatePath,
    convertPathToAbsolute,
    existPath,
    archive,
    isDirectory,
    isMD,
    readDirectorio,
    getAllFiles
} = require('../api');

// ********************** test de API **********************

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

describe('archive', () => {
    it('Es una funcion', () => {
        expect(typeof archive).toBe('function');
    });

    it('Si es un archivo true', () => {
        expect(isMD("H:/Laboratoria/MD-links/LIM015-md-links/pruebas/prueba1.md")).toBe(true);
    });

    it('Si  no es un Archivo debería retornar False', () => {
        expect(isMD("./pruebas")).toBe(false);
    });

});

describe('isMD', () => {

    it('Es una función', () => {
        expect(typeof isMD).toBe('function');
    });

    it('Si es un archivo .MD debera retornar true', () => {
        expect(isMD("H:/Laboratoria/MD-links/LIM015-md-links/pruebas/prueba1.md")).toBe(true);
    });

    it('Si es un Archivo debería retornar False', () => {
        expect(isMD("H:/Laboratoria/MD-links/LIM015-md-links/pruebas/prueba.txt")).toBe(false);
    });


});

describe('readDirectorio', () => {

    const arrayDir = ['prueba.txt', 'prueba1.md', 'prueba2.md', 'pruebas1'];

    it('Es una función', () => {
        expect(typeof readDirectorio).toBe('function');
    });

    it('Despues de leer los directorios debera retornar la eñ contenido del primer directorio que encontro', () => {
        expect(readDirectorio("./pruebas")).toEqual(arrayDir);
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

describe('getAllFiles', () => {
    const arrayDirectory = [
        'pruebas\\prueba1.md',
        'pruebas\\prueba2.md',
        'pruebas\\pruebas1\\OTRA\\nuevo.md',
        'pruebas\\pruebas1\\prueba3.md'
    ];

    it('Es una función', () => {
        expect(typeof getAllFiles).toBe('function');
    });

    it('Si es un Directorio debería retornar un array con los archivos .md de ese directorio', () => {
        expect(getAllFiles("./pruebas")).toEqual(arrayDirectory);
    });

    it('Si es un Directorio debería retornar un array con los archivos .md de ese directorio', () => {
        expect(getAllFiles("./pruebas")).toEqual(arrayDirectory);
    });


});