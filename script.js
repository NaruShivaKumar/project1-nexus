// Form validation for signup page
const signupForm = document.getElementById('signupForm');
const signupError = document.getElementById('signupError');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        signupError.textContent = 'Passwords do not match';
    } else {
        // Here you can add further validation or submit the form
        signupError.textContent = '';
        // For now, let's assume the form is valid and can be submitted
        alert('Signup successful!'); // Replace this with your desired action
        signupForm.reset();
    }
});

// Basic form validation for login page
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here, you can add more comprehensive validation logic
    // For simplicity, let's check if both fields are filled
    if (!email || !password) {
        loginError.textContent = 'Please enter both email and password';
    } else {
        loginError.textContent = '';
        // For now, let's assume the form is valid and can be submitted
        alert('Login successful!'); // Replace this with your desired action
        loginForm.reset();
    }
});
