
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailidInput = document.getElementById('emailid');
  const passwordInput = document.getElementById('password');
  const phoneInput = document.getElementById('phone');
  const phone= phoneInput.value;
  const password = passwordInput.value;

  if (phone =='7981097234' && password =='qwerty') {
    alert('Login successful!');
    loginForm.reset();
  } else {
    const errorElement = document.createElement('p');
    errorElement.textContent = 'field is empty';
    errorElement.className = 'error';
    loginForm.appendChild(errorElement);
  }
});
