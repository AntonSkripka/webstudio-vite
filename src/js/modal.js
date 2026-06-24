//! Бєк-дроп з модальним вікном
const openModalBtn = document.querySelector("[data-modal-open]");
const modal = document.querySelector("[data-modal]");
const closeModalBtn = document.querySelector("[data-modal-close]");
const form = document.querySelector("[modal-form]");

if (form) {
  const submitButton = form.querySelector("[modal-submit]");
  const requiredInputs = form.querySelectorAll("[required]");

  if (openModalBtn) openModalBtn.addEventListener("click", toggleModal);
  if (closeModalBtn) closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    if (modal) {
      modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  }

  const phoneInput = form.querySelector('input[name="tel"]');
  const emailInput = form.querySelector('input[name="email"]');

  const phoneRegex = /^\+\d{1,3}-\d{2,3}-\d{3}-\d{2}-\d{2}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const displayErrorMessage = (inputElement, message) => {
    let insertionPoint = inputElement;
    if (inputElement.closest(".modal__input")) {
      insertionPoint = inputElement.closest(".modal__input");
    } else if (inputElement.classList.contains("modal__textarea-comment")) {
      insertionPoint = inputElement;
    } else if (inputElement.type === "checkbox") {
      insertionPoint = inputElement.closest(".modal__label-comment");
    }

    removeErrorMessage(inputElement);

    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = message;

    if (insertionPoint) {
      insertionPoint.after(errorMessage);
    }
  };

  const removeErrorMessage = (inputElement) => {
    let checkElement = inputElement;
    if (inputElement.closest(".modal__input")) {
      checkElement = inputElement.closest(".modal__input");
    } else if (inputElement.type === "checkbox") {
      checkElement = inputElement.closest(".modal__label-comment");
    } else if (inputElement.classList.contains("modal__textarea-comment")) {
      checkElement = inputElement;
    }

    const nextElement = checkElement.nextElementSibling;

    if (nextElement && nextElement.classList.contains("error-message")) {
      nextElement.remove();
    }
  };

  const updateValidationStyles = (inputElement, isValid) => {
    let targetElement = null;
    if (inputElement.closest(".modal__input")) {
      targetElement = inputElement.closest(".modal__input");
    } else if (inputElement.classList.contains("modal__textarea-comment")) {
      targetElement = inputElement;
    }

    if (targetElement) {
      if (isValid) {
        targetElement.classList.add("is-valid");
      } else {
        targetElement.classList.remove("is-valid");
      }
    }
  };

  const checkFormValidity = () => {
    let allFilledAndValid = true;

    requiredInputs.forEach((input) => {
      removeErrorMessage(input);

      let isValid = true;

      if (input.type !== "checkbox" && input.value.trim() === "") {
        isValid = false;
        displayErrorMessage(input, "Поле повинно бути заповнено.");
      }

      if (input.type === "checkbox" && !input.checked) {
        isValid = false;
      }

      if (input === phoneInput && input.value.trim() !== "") {
        if (!phoneRegex.test(input.value)) {
          isValid = false;
          displayErrorMessage(
            input,
            "Номер телефону некоректний. Формат: +XX-XXX-XXX-XX-XX."
          );
        }
      }

      if (input === emailInput && input.value.trim() !== "") {
        if (!emailRegex.test(input.value)) {
          isValid = false;
          displayErrorMessage(input, "Адреса некорректна.");
        }
      }

      updateValidationStyles(input, isValid);

      if (!isValid) {
        allFilledAndValid = false;
      }
    });

    if (submitButton) {
      submitButton.disabled = !allFilledAndValid;
    }
  };

  checkFormValidity();

  requiredInputs.forEach((input) => {
    if (input.type === "checkbox") {
      input.addEventListener("change", checkFormValidity);
    } else {
      input.addEventListener("input", checkFormValidity);
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target.elements.name?.value);
    console.log(e.target.elements.tel?.value);
    console.log(e.target.elements.email?.value);
    console.log(e.target.elements.comment?.value);
    console.log(e.target.elements.checkbox?.value);
    e.target.reset();
  });
}