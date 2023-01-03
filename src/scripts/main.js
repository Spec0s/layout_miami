'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});

const send = document.querySelector('#send');
const formData = document.querySelectorAll('.contacts__personal');

send.addEventListener('click', buttonSend);

function buttonSend(event) {
  event.preventDefault();
  formData[0].value = '';
  formData[1].value = '';
  formData[2].value = '';
}
