const emailInput = document.querySelector('.footer-input');
const submitBtn = document.querySelector('.footer-submit-btn');
const errorIcon = document.querySelector('.error-icon');
const errorMessage = document.querySelector('.error-message');

const modal = document.querySelector('#subscribe-modal');
const modalBackdrop = document.querySelector('.modal-backdrop');
const modalClose = document.querySelector('.close-sbsrcb-modal-btn');

const body = document.body;

// Email validation function
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Email validation while input
emailInput.addEventListener('input', () => {
  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add('invalid');
    errorIcon.style.display = 'block';
  } else {
    emailInput.classList.remove('invalid');
    errorIcon.style.display = 'none';
    errorMessage.style.display = 'none';
  }
});

// "Subscribe" addEventListener
submitBtn.addEventListener('click', event => {
  if (!validateEmail(emailInput.value)) {
    event.preventDefault();
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    console.log('Submitted email:', emailInput.value);

    modal.style.display = 'flex';
    modalBackdrop.style.display = 'block';
    body.classList.add('no-scroll');

    emailInput.value = '';
  }
});

// Close modal
function closeModal() {
  modal.style.display = 'none';
  modalBackdrop.style.display = 'none';
  body.classList.remove('no-scroll');
}

modalClose.addEventListener('click', closeModal);

modalBackdrop.addEventListener('click', closeModal);
