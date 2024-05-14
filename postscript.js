let url = "https://v2.api.noroff.dev/blog/posts/tristian";
window.onload = function() {
    // function for deliver the post to the api
    function sendPost(image, text) {
      let data = { image: image, text: text };
  
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then(data => console.log(data))
      .catch((error) => console.error('Error:', error));
    }
  
    // adds a eventlistener for post button
    document.querySelector('button').addEventListener('click', function() {
      sendPost(document.getElementById('imageInput').value, document.getElementById('textInput').value);
    });
  }