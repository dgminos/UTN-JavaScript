/**
 *
 * Login logic
 *
 */

const loginShowHideFormButtons =
  document.getElementsByClassName("show-hide-btn"); // Retorna un array con todos los elementos encontrados con la clase solicitada

const loginShowHideFormLoginButton = loginShowHideFormButtons[1];

const loginRememberCheckBox = document.getElementById("remember-check");
const abledDisabledLoginButton = document.getElementById("login-btn");
const loginForm = document.getElementById("login-form");

const hideCreateAccountForm = document.getElementById("create-account-form");
const hideBlockedForm = document.getElementById("blocked-form");

// loginShowHideFormLoginButton.addEventListener("click", () => {
//   loginForm.classList.toggle("d-none");

// });

loginShowHideFormLoginButton.addEventListener("click", () => {
  if (loginForm.classList.contains("d-none")) {
    loginForm.classList.remove("d-none");
    hideCreateAccountForm.classList.add("d-none");
    hideBlockedForm.classList.add("d-none");
  } else {
    loginForm.classList.add("d-none");
  }
});

loginRememberCheckBox.addEventListener("change", () => {
  const isDisabled = abledDisabledLoginButton.hasAttribute("disabled");
  if (isDisabled) {
    abledDisabledLoginButton.removeAttribute("disabled");
  } else {
    abledDisabledLoginButton.setAttribute("disabled", true);
  }
});
