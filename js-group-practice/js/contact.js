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
const spinner = document.getElementById("spinner");
const formContact = document.getElementById("form");

setTimeout(() => {
  spinner.classList.add("d-none");
  formContact.classList.remove("d-none");
}, 5000);

//inputs verification logic
const userEmail = document.getElementById("email");
const userTextArea = document.getElementById("text-area");
const sendFormButton = document.getElementById("submit-btn");

formContact.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const validateInputs = () => {
  const emailValue = userEmail.value.trim();
  const userTextAreaValue = userTextArea.value.trim();
  if (emailValue === "") {
    setError(userEmail, "Por favor, coloque su email");
  } else if (!isEmail(emailValue)) {
    setError(userEmail, "Ingrese un email válido");
  } else {
    setSuccess(userEmail);
  }
  if (userTextAreaValue === "") {
    setError(userTextArea, "Por favor, deje un mensaje");
  } else {
    setSuccess(userTextArea);
  }
};

const setError = (input, message) => {
  const inputControl = input.parentElement; //form-control
  const errorDisplay = inputControl.querySelector("small");
  inputControl.className = "form-control error";
  errorDisplay.innerText = message;
};

const setSuccess = (input) => {
  const inputControl = input.parentElement; //form-control
  inputControl.className = "form-control success";
};

const isEmail = (emailValue) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    emailValue
  );
};
