/**
 *
 * Create account logic
 *
 */

const createAccountShowHideFormButtons =
  document.getElementsByClassName("show-hide-btn");
const showHideFormCreateAccountButton = createAccountShowHideFormButtons[0];
// const createAccountButton = document.getElementById('createAccount')
const createAccountForm = document.getElementById("create-account-form");
const allowPolicyCheck = document.getElementById("policy-check");
const abledDisabledCreateAccountButton = document.getElementById("create-btn");

const hideLoginForm = document.getElementById("login-form");
const hideBlockedAccountForm = document.getElementById("blocked-form");

// showHideFormCreateAccountButton.addEventListener("click", () => {
//   createAccountForm.classList.toggle("d-none");
// });

showHideFormCreateAccountButton.addEventListener("click", () => {
  if (createAccountForm.classList.contains("d-none")) {
    createAccountForm.classList.remove("d-none");
    hideLoginForm.classList.add("d-none");
    hideBlockedAccountForm.classList.add("d-none");
  } else {
    createAccountForm.classList.add("d-none");
  }
});

allowPolicyCheck.addEventListener("change", () => {
  const isDisabled = abledDisabledCreateAccountButton.hasAttribute("disabled");
  if (isDisabled) {
    abledDisabledCreateAccountButton.removeAttribute("disabled");
  } else {
    abledDisabledCreateAccountButton.setAttribute("disabled", true);
  }
});
