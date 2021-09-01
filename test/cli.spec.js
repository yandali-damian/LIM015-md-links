const {
    renderLinks,
    optionValidate,
    optionStats,
    optionStatsValidate
} = require('../cli');

// ********************** test de CLI **********************

describe('renderLinks', () => {
    const arraySalida = [
        '\x1B[1mH:\\Laboratoria\\MD-links\\LIM015-md-links\\pruebas\\pruebas1\\OTRA\\nuevo.md \x1B[34mhttps://platzi.com/clases/html5-css3/\x1B[39m html5 css3\x1B[22m'
    ];
    const ArrayEntrada = [{
        file: 'H:\\Laboratoria\\MD-links\\LIM015-md-links\\pruebas\\pruebas1\\OTRA\\nuevo.md',
        href: 'https://platzi.com/clases/html5-css3/',
        text: 'html5 css3'
    }];

    it('Es una función', () => {
        expect(typeof renderLinks).toBe('function');
    });

    test('cuando ingresamos una ruta debera devolvernos un array con los links', () => {
        expect(renderLinks(ArrayEntrada)).toEqual(arraySalida);
    });

});

describe('optionStats', () => {

    it('Es una función', () => {
        expect(typeof optionStats).toBe('function');
    });

});

describe('optionStatsValidate', () => {

    it('Es una función', () => {
        expect(typeof optionStatsValidate).toBe('function');
    });

});