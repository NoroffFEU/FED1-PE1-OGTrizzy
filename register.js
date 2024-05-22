//register function
function register(name, email, password){
    var data = {
        name: name,
        email: email,
        password: password
    };

    var options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };
    
    //fetch the api
    fetch('https://v2.api.noroff.dev/auth/register', options)
    .then(response => {
        if (response.ok) {
            console.log('Register success!');
            alert('Register success! Please login at the login page')
            return response.json();
        } else {
            console.log('Register failed.');
            throw new Error('Register failed.');
        }
    })
    .then(data => {
        localStorage.setItem('accessToken', data.accessToken);
    })
    .catch(error => console.error('Error:', error));
}

//handle register function
function handleRegister(){
    var nameInput = document.querySelector('input[name="name"]');
    var emailInput = document.querySelector('input[name="email"]');
    var passwordInput = document.querySelector('input[name="psw"]');
    var confirmPasswordInput = document.querySelector('input[name="psw-confirm"]');
    var registerButton = document.querySelector('.register-box button[type="submit"]');

    registerButton.addEventListener('click', function(event){
        event.preventDefault();
        if (passwordInput.value.length < 8) {
            alert('Password need to be 8 letter length!');
        } else if (passwordInput.value === confirmPasswordInput.value) {
            register(nameInput.value, emailInput.value, passwordInput.value);
        } else {
            alert('Password must match!');
        }
    });
}

window.addEventListener('DOMContentLoaded', handleRegister);