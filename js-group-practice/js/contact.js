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

//if inputs are not blank enable/disabled submit button verification and add styles logic
const userEmail = document.getElementById("email");
const userTextArea = document.getElementById("text-area");
const sendFormButton = document.getElementById("submit-btn");

const validate = () => {
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
  const filled =
    (emailValue!=="" && isEmail(emailValue) && userTextAreaValue!=="");
  filled ? sendFormButton.disabled = false : sendFormButton.disabled = true;
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

// create Bootstrap alert logic 
const createAlert = (message, type) => {
  const bootstrapAlert = document.createElement("div")
  bootstrapAlert.style.display = "block";
  bootstrapAlert.style.width = "400px"
  bootstrapAlert.style.position = "absolute";
  bootstrapAlert.style.top = "62px";
  bootstrapAlert.style.left = "568px";
  bootstrapAlert.innerHTML = [
    `<div class="text-center alert alert-${type} alert-dismissible" role="alert" id="alert-container">`,
    `   <div>${message}</div>`,
    '</div>'
  ].join("")
  formContact.appendChild(bootstrapAlert)
  }

// create card message logic
  const createCardMessage = () => {
    const body = document.querySelector("body")
    const cardContainer = document.createElement("div")
    cardContainer.className = "container card-container"
    cardContainer.style.width = "500px"
    cardContainer.style.marginTop = "200PX"
    const card = document.createElement("div")
    card.className = "card text-center"
    const cardBody = document.createElement("div")
    cardBody.className = "card-body"
    const h3 = document.createElement("h3")
    h3.className.className = "mt-4"
    h3.innerText = "Gracias por contactarnos."
    const p = document.createElement("p")
    p.className = "mt-5"
    p.innerText = "Su consulta será contestada a la brevedad."
    const a = document.createElement("a")
    a.setAttribute("href", "../index.html")
    a.className = "btn btn-card-message mt-5"
    a.innerText = "Ir a Inicio"

    // appends
    body.appendChild(cardContainer)
    cardContainer.appendChild(card)
    card.appendChild(cardBody)
    cardBody.appendChild(h3)
    cardBody.appendChild(p)
    cardBody.appendChild(a)
   }

   //form reset function
const formReset = () => {
  userEmail.value =""
  userTextArea.value =""
}

  // Hide form contact after 5 seconds, reset form, show Bootstrap alert and show card message when submitting logic
  formContact.addEventListener("submit", (e) => {
    e.preventDefault()
    createAlert("Formulario enviado!", "success")
   formReset()
    setTimeout(() => {
      formContact.classList.add("d-none");
      createCardMessage() 
    }, 5000);
  })
  
  