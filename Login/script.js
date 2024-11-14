const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLogin = document.querySelector('.btn-login');
const closePopup = document.querySelector('.close-popup');

if (registerLink) {
  registerLink.addEventListener('click', () => {
    if (container) {
      container.classList.add('active');
    }
  });
}

if (loginLink) {
  loginLink.addEventListener('click', () => {
    if (container) {
      container.classList.remove('active');
    }
  });
}

if (btnLogin) {
  btnLogin.addEventListener('click', () => {
    if (container) {
      container.classList.add('active-popup');
    }
  });
}

if (closePopup) {
  closePopup.addEventListener('click', () => {
    if (container) {
      container.classList.remove('active-popup');
    }
  });
}


