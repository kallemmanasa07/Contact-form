// Form elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

// Regex for email validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function (e) {
  e.preventDefault(); // stop form from reloading page
  let valid = true;

  // Reset previous messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMessage.textContent = '';

  // Validate Name
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required';
    valid = false;
  }

  // Validate Email
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required';
    valid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Enter a valid email (e.g. user@example.com)';
    valid = false;
  }

  // Validate Message
  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Message is required';
    valid = false;
  }

  // Show success message if valid
  if (valid) {
    successMessage.textContent = '✅ Form submitted successfully!';
    form.reset();
  }
});
