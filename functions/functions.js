//ADDITION
// const add = (num1, num2) => {
//   console.log(num1 - num2);
// };
// add(10, 20);

const add = () => {
  const num1 = document.getElementById("number-one").value;
  const num2 = document.getElementById("number-two").value;
  const result = parseInt(num1) + parseInt(num2);
  if (!isNaN(result)) {
    document.getElementById("add-result").innerHTML = result;
  }
};

//SUBTRACTION
// const subtract = (num1, num2) => {
//   console.log(num1 - num2);
// };
// subtract(10, 20);

const subtract = () => {
  const number1 = document.getElementById("number-1").value;
  const number2 = document.getElementById("number-2").value;
  const result = parseInt(number1) - parseInt(number2);
  if (!isNaN(result)) {
    document.getElementById("subtract-result").innerHTML = result;
  }
};

//MULTIPLICATION
// const multiply = (num1, num2) => {
//   console.log(num1 * num2);
// };
// multiply(10, 20);

const multiply = () => {
  const n1 = document.getElementById("n1").value;
  const n2 = document.getElementById("n2").value;
  const result = parseInt(n1) * parseInt(n2);
  if (!isNaN(result)) {
    document.getElementById("multiply-result").innerHTML = result;
  }
};

//DIVISION
// const divide = (num1, num2) => {
//   console.log(num1 * num2);
// };
// divide(10, 20);

const divide = () => {
  const numberOne = document.getElementById("num-1").value;
  const numberTwo = document.getElementById("num-2").value;
  const result = parseInt(numberOne) / parseInt(numberTwo);
  if (!isNaN(result)) {
    document.getElementById("divide-result").innerHTML = result;
  }
};

//crear un array que contenga edades
//iterar ese array completo y mostrar un mensaje por consola que indique la edad de la persona(si es mayor de edad o no)
