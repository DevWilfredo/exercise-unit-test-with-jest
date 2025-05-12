// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen  = function(valueInDollar) {
    //Convertir Dolares a euros
    let euros = valueInDollar / 1.07;
    return parseFloat((euros*156.5).toFixed(4));
}
const fromYenToPound = function(valueInYen) {
    let euros = valueInYen / 156.5;
    return parseFloat((euros*0.87).toFixed(4));
}

// Solo un registro en consola para nosotros
console.log(sum(7,3));

console.log(fromDollarToYen(1));
console.log(fromYenToPound(1));

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };