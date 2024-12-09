document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const passwordStrength = document.getElementById('passwordStrength');

    // Email Validation
    emailInput.addEventListener('input', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value === '') {
            emailError.textContent = 'Email is required.';
        } else if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email.';
        } else {
            emailError.textContent = '';
        }
    });

    // Password Validation
    passwordInput.addEventListener('input', () => {
        const strength = checkPasswordStrength(passwordInput.value);
        passwordStrength.textContent = strength.message;
        passwordStrength.className = strength.class;
    });

    // Confirm Password Validation
    confirmPasswordInput.addEventListener('input', () => {
        if (confirmPasswordInput.value === '') {
            confirmPasswordError.textContent = 'Please confirm your password.';
        } else if (confirmPasswordInput.value !== passwordInput.value) {
            confirmPasswordError.textContent = 'Passwords do not match.';
        } else {
            confirmPasswordError.textContent = '';
        }
    });

    // Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission for demonstration

        // Final Validation Check
        if (!emailError.textContent && !passwordError.textContent && !confirmPasswordError.textContent) {
            alert('Form submitted successfully!');
        } else {
            alert('Please fix the errors in the form before submitting.');
        }
    });

    // Password Strength Checker
    function checkPasswordStrength(password) {
        if (password.length < 6) {
            return { message: 'Password is too short.', class: 'invalid' };
        } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
            return { message: 'Password should include at least one uppercase letter and one number.', class: 'invalid' };
        } else if (password.length >= 6 && password.length <= 8) {
            return { message: 'Password strength: Medium.', class: 'valid' };
        } else {
            return { message: 'Password strength: Strong.', class: 'valid' };
        }
    }
});
