//login function
function login(email, password){
    var data = {
        email: email,
        password: password
    };

    var options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };
    
    //fetch the api
    fetch('https://v2.api.noroff.dev/auth/login', options)
    .then(response => {
        if (response.ok) {
            console.log('Login was success!');
            alert('Login was success!')
            return response.json();
        } else {
            console.log('Login failed.');
            throw new Error('Login failed.');
        }
    })
    .then(data => {
        localStorage.setItem('accessToken', data.data.accessToken);
    })
    .catch(error => console.error('Error:', error));
}

//handle login function
function handleLogin(){
    var emailInput = document.querySelector('input[name="email"]');
    var passwordInput = document.querySelector('input[name="psw"]');
    var loginButton = document.querySelector('.login-box button[type="submit"]');

    loginButton.addEventListener('click', function(event){
        event.preventDefault();
        login(emailInput.value, passwordInput.value);
    });
}

window.addEventListener('DOMContentLoaded', handleLogin);