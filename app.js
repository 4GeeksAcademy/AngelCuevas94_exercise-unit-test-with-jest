

// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToEuro = function(valueInDollar) {
    // Convertimos el valor a euros
    let valueInEuro = valueInDollar / 1.07;
    // Retornamos el valor en euros
    return valueInEuro;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a euros
    let valueInEuro = fromDollarToEuro(valueInDollar);
    // Convertimos el valor de euros a yenes
    let valueInYen = valueInEuro * 156.5;
    // Retornamos el valor en yenes
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a euros
    let valueInEuro = valueInYen / 156.5;
    // Convertimos el valor de euros a libras
    let valueInPound = valueInEuro * 0.87;
    // Retornamos el valor en libras
    return valueInPound;
}

module.exports = { fromEuroToDollar, fromDollarToEuro, fromDollarToYen, fromYenToPound };
