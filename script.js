document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const emailSuccess = document.getElementById('emailSuccess');
    const passwordSuccess = document.getElementById('passwordSuccess');
  
    emailInput.addEventListener('input', function() {
      validateEmail();
    });
  
    passwordInput.addEventListener('input', function() {
      validatePassword();
    });
  
    function validateEmail() {
      const emailValue = emailInput.value.trim();
      if (emailValue.length < 3 || !emailValue.includes('@') || !emailValue.includes('.')) {
        emailError.textContent = 'Email must be at least 3 characters long and contain "@" and "."';
        emailSuccess.style.display = 'none';
      } else {
        emailError.textContent = '';
        emailError.classList.remove('error');
        emailSuccess.style.display = 'inline';
      }
    }
  
    function validatePassword() {
      const passwordValue = passwordInput.value.trim();
      if (passwordValue.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
        passwordSuccess.style.display = 'none';
      } else {
        passwordError.textContent = '';
        passwordError.classList.remove('error');
        passwordSuccess.style.display = 'inline';
      }
    }
  
    document.getElementById('signupForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Check if both email and password are valid
      validateEmail();
      validatePassword();
      if (emailError.textContent === '' && passwordError.textContent === '') {
        // Show confirmation window
        if (confirm("Are you sure you want to sign up?")) {
          alert("Successful signup!");
        } else {
          // Redirect to the same page and clear input values
          window.location.href = window.location.href;
          emailInput.value = '';
          passwordInput.value = '';
        }
      }
    });
  });