const passcodeForm = document.querySelector("#passcode-form");
const passcodeInput = document.querySelector("#passcode");
const feedback = document.querySelector("#passcode-message");

passcodeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredCode = passcodeInput.value.trim();

  if (!/^\d{4}$/.test(enteredCode)) {
    showFeedback("Please enter all four digits.", "error");
    shakeInput();
    return;
  }

  if (enteredCode === SITE_CONFIG.passcode) {
    showFeedback("That's it! Opening your surprise... ♥", "success");
    passcodeInput.disabled = true;
    passcodeForm.querySelector("button").disabled = true;

    window.setTimeout(() => {
      window.location.href = SITE_CONFIG.nextPage;
    }, 850);
    return;
  }

  showFeedback("Oops! That's not the secret code. Try again ♥", "error");
  passcodeInput.value = "";
  shakeInput();
  passcodeInput.focus();
});

function showFeedback(message, type) {
  feedback.textContent = message;
  feedback.className = `feedback ${type}`;
}

function shakeInput() {
  passcodeInput.classList.remove("is-shaking");
  // Restart the CSS animation after removing its class.
  void passcodeInput.offsetWidth;
  passcodeInput.classList.add("is-shaking");
}
