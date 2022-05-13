/**
 * Instrucciones:
 *
 * 1 - Para el formulario de contacto hacer que el spinner desaparezca luego de 5 segundos (investigar setTimeOut, funcion de javascript)
 * y al desaparecer mostrar el formulario de contacto.
 *
 * 2 - Al hacer click en el boton enviar validar que los campos no esten vacíos
 *
 * 3 - Al hacer click en el botón enviar crear un elemento usando el dom con javascript y mostrar una alerta de bootstrap( https://getbootstrap.com/docs/5.0/components/alerts/ )
 * El mensaje de la alerta debe decir que se envió el formulario
 *
 * 4- Al desaparecer la alerta (5 segundos despues) ocultar el formulario y mostrar una card que diga como titulo h3: "Gracias por contactarnos"
 * como parrafo del body de la card mostrar un mensaje que haga referencia a que en la brevedad seran contactados.
 *
 */

//1- Remove spinner/ show form logic

console.log("hola");
const spinner = document.getElementById("spinner");
const formContact = document.getElementById("contact-form-card");

setTimeout(() => {
  spinner.classList.add("d-none");
  formContact.classList.remove("d-none");
}, 5000);

//inputs verification logic
const emailInput = document.getElementById("email");
const textArea = document.getElementById("text-area");
const sendFormButton = document.getElementsByClassName("btn");

sendFormButton[0].addEventListener("click", () => {
  if (emailInput.value === "") {
    alert("Por favor, complete el campo de email");
  }
  if (textArea.value === "") {
    alert("Por favor, complete el campo de text area");
  }
});
