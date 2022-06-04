import { Notify } from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  startBtn: document.querySelector('button'),
}
refs.form.addEventListener("submit", onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const amountInput = refs.amount.value;
  const delayInput = Number(refs.delay.value);
  const stepInput = Number(refs.step.value);
  
  setTimeout(() => {
    for (let i = 0; i < amountInput; i += 1) {
      let msCount = delayInput + stepInput * i;
      const position = i + 1;
      createPromise(position, msCount)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
          Notify.success(`Promise resolved at position ${position} with delay ${delay}`);
        }).catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
          Notify.failure(`Promise rejected at position ${position} with delay ${delay}`);
        });
    }
  }, delayInput);
}

  function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}