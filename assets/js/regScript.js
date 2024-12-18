window.onload = () => {
    const spinnerOverlay = document.getElementById('spinner-overlay');
    const registerForm = document.getElementById('register-form');

    //form visibility
    setTimeout(() => {
        spinnerOverlay.classList.add('hidden'); 
        registerForm.classList.add('visible'); 
    }, 1000); 
};

//  form submission
document.getElementById('register-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    // Saving  user data 
    localStorage.setItem('registeredUsername', username);
    localStorage.setItem('registeredEmail', email);
    localStorage.setItem('registeredPassword', password);

    //  spinner during submission
    const spinnerOverlay = document.getElementById('spinner-overlay');
    spinnerOverlay.classList.remove('hidden');

    
    setTimeout(() => {
        alert('Registration successful! Redirecting to login page...');
        window.location.href = 'index.html?registered=true';
    }, 2000); 
});
