document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Error message containers
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Reset error messages
    emailError.textContent = "";
    passwordError.textContent = "";

    let hasError = false;

    // Validate email
    if (!email.includes('@') || !email.includes('.')) {
        emailError.textContent = "Please enter a valid email address.";
        hasError = true;
    }

    // Validate password
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        hasError = true;
    }

    // Submit form if no errors
    if (!hasError) {
        alert('Login successful!');
    }
});
