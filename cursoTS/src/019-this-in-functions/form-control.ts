const SHOW_ERROR_MESSAGE = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.form') as HTMLInputElement;
const email = document.querySelector('.form') as HTMLInputElement;
const password = document.querySelector('.form') as HTMLInputElement;
const password2 = document.querySelector('.form') as HTMLInputElement;
import validator = require('validator');
import isEmail from 'validator/lib/isEmail';

const submitEventFn = (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  hideErrorMessages(target);
  checkEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkPassword(password, password2);
  if (sendForm(target)) console.log('Formulário enviado com sucesso!');
}

form.addEventListener('submit', submitEventFn);

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGE)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGE));
}

function showErrorMessages(input: HTMLFormElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGE);
}

function checkEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value)
      showErrorMessages(input, 'Os campos não podem estar vazios');
  });
}

function checkEmail(email: HTMLInputElement): void {
  if (!isEmail(email.value)) showErrorMessages(email, 'Email inválido');
}

function checkPassword(
  password: HTMLInputElement,
  password2: HTMLInputElement,
) {
  const PSValue1 = password.value;
  const PSValue2 = password2.value;

  if (PSValue1 != PSValue2) {
    showErrorMessages(password, 'As senhas não são iguais');
    showErrorMessages(password2, 'As senhas não são iguais');
  }
}

function sendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(() => (send = false));
  return send;
}
