// ===== PART 1: JavaScript Event Handling =====
// This section demonstrates responding to various user actions.

// Wait for the DOM to be fully loaded before running our scripts
document.addEventListener('DOMContentLoaded', function() {

    // ===== PART 2: Interactive Element 1 - Dark/Light Mode Toggle =====
    console.log("Setting up Dark Mode Toggle...");

    // 1. Get a reference to the toggle button
    const themeToggle = document.getElementById('theme-toggle');

    // 2. Add a click event listener to the button
    themeToggle.addEventListener('click', function() {
        console.log("Theme toggle button clicked!");

        // 3. Toggle the 'dark-mode' class on the body
        document.body.classList.toggle('dark-mode');

        // 4. Change the button text based on the current mode
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.textContent = '☀️ Light Mode';
        } else {
            themeToggle.textContent = '🌙 Dark Mode';
        }
    });

    // ===== PART 2: Interactive Element 2 - Counter Game =====
    console.log("Setting up Counter Game...");

    // 1. Get references to all the elements we need
    const countDisplay = document.getElementById('count-display');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.getElementById('reset-btn');

    // 2. Initialize the count
    let count = 0;

    // 3. Function to update the display
    function updateDisplay() {
        countDisplay.textContent = count;
    }

    // 4. Event listener for the increment button
    incrementBtn.addEventListener('click', function() {
        count++;
        updateDisplay();
        console.log("Count increased to:", count);
    });

    // 5. Event listener for the decrement button
    decrementBtn.addEventListener('click', function() {
        count--;
        updateDisplay();
        console.log("Count decreased to:", count);
    });

    // 6. Event listener for the reset button
    resetBtn.addEventListener('click', function() {
        count = 0;
        updateDisplay();
        console.log("Count reset to 0");
    });

    // ===== PART 3: Form Validation =====
    console.log("Setting up Form Validation...");

    // 1. Get references to the form and input fields
    const registrationForm = document.getElementById('registration-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const successMessage = document.getElementById('success-message');

    // 2. Add event listener for form submission
    registrationForm.addEventListener('submit', function(event) {
        console.log("Form submission attempted...");
        
        // Prevent the form from submitting the traditional way (which reloads the page)
        event.preventDefault();
        
        // Reset previous error messages and success message
        clearMessages();
        
        // Validate each field. Assume the form is valid until proven otherwise.
        let isValid = true;

        // Validate Name (must not be empty)
        if (nameInput.value.trim() === '') {
            showError(nameError, 'Name is required');
            isValid = false;
        }

        // Validate Email using a simple regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            showError(emailError, 'Please enter a valid email address');
            isValid = false;
        }

        // Validate Password (at least 6 characters)
        if (passwordInput.value.length < 6) {
            showError(passwordError, 'Password must be at least 6 characters long');
            isValid = false;
        }

        // If the form is valid, show success message
        if (isValid) {
            successMessage.textContent = 'Registration successful! Welcome, ' + nameInput.value + '!';
            successMessage.style.display = 'block';
            console.log("Form submitted successfully!");
            
            // In a real application, you would send the data to a server here
            // registrationForm.submit(); // This would actually submit the form
        }
    });

    // Helper function to display error messages
    function showError(errorElement, message) {
        errorElement.textContent = message;
    }

    // Helper function to clear all messages
    function clearMessages() {
        nameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        successMessage.style.display = 'none';
    }

    // Bonus: Add real-time validation as the user types
    nameInput.addEventListener('input', function() {
        if (nameInput.value.trim() !== '') {
            nameError.textContent = ''; // Clear error if user starts typing
        }
    });

    emailInput.addEventListener('input', function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(emailInput.value)) {
            emailError.textContent = ''; // Clear error if email becomes valid
        }
    });

    passwordInput.addEventListener('input', function() {
        if (passwordInput.value.length >= 6) {
            passwordError.textContent = ''; // Clear error if password is long enough
        }
    });

    console.log("All JavaScript loaded successfully! 🚀");
});