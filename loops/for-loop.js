/****
 * EJERCICIO 1:
 * Crear un array que contenga edades
 * iterar ese array completo y mostrar un mensaje por consola que indique la edad de las personas
 *
 */

const ages = [5, 10, 15, 25, 35, 45];

for (let age = 0; age < ages.length; age++) {
  console.log("Ages are: " + ages[age] + " " + "years old");
}

/****
 * EJERCICIO 2:
 * ... del array anterior mostrar si la persona es o no mayor de edad indicando entre parentesis cuál es la edad
 *
 */

const otherAges = [12, 5, 23, 45, 50];

for (let age = 0; age < otherAges.length; age++) {
  //   console.log(ages[age]);
  if (otherAges[age] <= 18) {
    console.log(`La persona es menor de edad (${otherAges[age]} años)`);
  } else {
    console.log(`La persona es mayor de edad (${otherAges[age]} años)`);
  }
}

/****
 * EJERCICIO 3:
 * Del siguiente array const fruit = ['Manzana', 'Naranja', 'Durazno', 'Banana', 'Anana']
 * mostrar por consola solo las frutas Manzana y Banana
 */

const fruit = ["Manzana", "Naranja", "Durazno", "Banana", "Anana"];

for (let i = 0; i <= fruit.length; i++) {
  if (fruit[i] === "Manzana" || fruit[i] === "Banana") {
    console.log("Fruit are: " + fruit[i]);
  }
}

/****
 * EJERCICIO 4:
 * Del siguiente array const numeros = [2,3,4,5,6,24,35,41,17]
 * mostrar solo los numeros pares
 *
 */

const numeros = [2, 3, 4, 5, 6, 24, 35, 41, 17];

for (let i = 0; i <= numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log("Los números pares son: " + numeros[i]);
  }
}

/****
 * EJERCICIO 5:
 * Del siguiente array const numeros = [2,3,4,5,6,24,35,41,17]
 * guardar en el array pairNumbers los elementos pares e
 * imprimir por consola el array pairNumbers completo (en el mismo console.log)
 *
 */

const numbers = [2, 3, 4, 5, 6, 24, 35, 41, 17];
const pairNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    pairNumbers.push(numbers[i]);
  }
}
console.log(`Pair numbers are:  ${pairNumbers}`);
// console.log(pairNumbers);

// Un filter es práctimante la implementación de un for más una condición y retorna un arreglo nuevo con los valores
// que cumplen la condición.

const otrosNumeros = [2, 3, 4, 5, 6, 24, 35, 41, 17];
let numerosPares = numbers.filter((numero) => numero % 2 === 0);

console.log("numerosPares", numerosPares);
