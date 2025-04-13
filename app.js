// Function to redirect to home page when logo is clicked
function goHome() {
    window.location.href = '/';
}

// Registration form submission handler (can be extended with OTP functionality later)
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registration Form Submitted!');
});
