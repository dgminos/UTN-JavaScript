/**
 *
 * Blocked account logic
 *
 */

const showHideFormBlockedAccountButtons =
  document.getElementsByClassName("show-hide-btn");
const showHideFormBlockedAccountButton = showHideFormBlockedAccountButtons[2];
const blockedAccountForm = document.getElementById("blocked-form");
// const disabledForm = document.querySelector("fieldset");

const notShoeCreateAccountForm = document.getElementById("create-account-form");
const notShowLoginForm = document.getElementById("login-form");

// showHideFormBlockedAccountButton.addEventListener("click", () => {
//   blockedAccountForm.classList.toggle("d-none");
// });

showHideFormBlockedAccountButton.addEventListener("click", () => {
  if (blockedAccountForm.classList.contains("d-none")) {
    blockedAccountForm.classList.remove("d-none");
    notShoeCreateAccountForm.classList.add("d-none");
    notShowLoginForm.classList.add("d-none");
  } else {
    blockedAccountForm.classList.add("d-none");
  }
});

// showHideFormBlockedAccountButton.addEventListener("change", () => {
//   const isDisabled = disabledForm.hasAttribute("disabled");
//   if (isDisabled) {
//     disabledForm.removeAttribute("disabled");
//   } else {
//     disabledForm.setAttribute("disabled", true);
//   }
// });

// Bootstrap5's Enable tooltip logic

const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
