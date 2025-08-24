import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  formEl: document.querySelector('.form'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(refs.formEl);
  const delay = Number(formData.get('delay'));
  const status = formData.get('state');

  const isSuccess = status === 'fulfilled';

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve(delay); // передаємо delay у resolve
      } else {
        reject(delay); // передаємо delay у reject
      }
    }, delay);
  });

  promise
    .then(value =>
      iziToast.success({
        message: `✅ Fulfilled promise in ${value}ms`,
      })
    )
    .catch(error =>
      iziToast.error({
        message: `❌ Rejected promise in ${error}ms`,
      })
    );
});
