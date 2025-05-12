// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    expect(dollars).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});
test("One dolar should be 0.0064 yenes", function() {

    // Uso la función como debe ser usada
    const yenes = fromDollarToYen(1);
    expect(yenes).toBe(0.0064); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});
test("One Yen should be 0.0056 pounds", function() {

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(1);
    expect(pounds).toBe(0.0056); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});