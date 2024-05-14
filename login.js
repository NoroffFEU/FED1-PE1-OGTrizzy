// save api key
var accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVHJpc3RpYW4iLCJlbWFpbCI6InRyaW9leTAwMjAwQHN0dWQubm9yb2ZmLm5vIiwiaWF0IjoxNzE1NjgyOTcxfQ.axHQG7b5ubhDaT9WSYqB-SSI1UXNgu29YpNkMp-DAcg";

// function to send a request to api
function callApi(endpoint, token) {
  var headers = new Headers();
  headers.append("Authorization", "Bearer " + token);

  var options = {
    method: 'GET',
    headers: headers
  };

  fetch(endpoint, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

// call the api with the key
callApi('https://v2.api.noroff.dev/blog/posts/tristian', accessToken);

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
    
    fetch('https://v2.api.noroff.dev/blog/posts/tristian', options)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('accessToken', data.accessToken);
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

window.addEventListener('DOMcontentLoaded', handleLogin)