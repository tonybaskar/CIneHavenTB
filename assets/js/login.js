window.onload = () => {
    const spinnerOverlay = document.getElementById('spinner-overlay');
    const registerForm = document.getElementById('login-form');

    
    setTimeout(() => {
        spinnerOverlay.classList.add('hidden');
        registerForm.classList.add('visible'); 
    }, 1000); 
};


//modal box1
document.addEventListener('DOMContentLoaded', () => {
    
    const params = new URLSearchParams(window.location.search);
    const registrationSuccess = params.get('registered');

    if (registrationSuccess === 'true') {
        
        const welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
        welcomeModal.show();
    }

    document.getElementById('login-form').addEventListener('submit', (event) => {
        event.preventDefault();

        const enteredUsername = document.getElementById('login-username').value;
        const enteredPassword = document.getElementById('login-password').value;

        const registeredUsername = localStorage.getItem('registeredUsername');
        const registeredPassword = localStorage.getItem('registeredPassword');

        
        if (enteredUsername === registeredUsername && enteredPassword === registeredPassword) {
            alert('Login successful! Redirecting to home page...');
            window.location.href = 'home.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
}); 
