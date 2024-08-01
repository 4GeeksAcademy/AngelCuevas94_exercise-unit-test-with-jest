// Importar la función sum del archivo app.js
const { sum } = require('./app.js');


// Importamos las funciones desde app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 3.5 euros deberían ser 3.745 dólares
});

test("One Dollar should be 156.5 Japan Yen", function() {
    // Uso la función como debe ser usada
    const yen = fromDollarToYen(3.5);

    // Convertimos 3.5 dólares a yenes
    const expected = (3.5 / 1.07) * 156.5;

    // Hago mi comparación (la prueba)
    expect(yen).toBe(expected); // 3.5 dólares deberían ser 511.68 yenes
});

test("One Yen should be 0.87 British Pounds", function() {
    // Uso la función como debe ser usada
    const pound = fromYenToPound(3.5);

    // Convertimos 3.5 yenes a libras
    const expected = (3.5 / 156.5) * 0.87;

    // Hago mi comparación (la prueba)
    expect(pound).toBe(expected); // 3.5 yenes deberían ser aproximadamente 0.01945 libras
});
