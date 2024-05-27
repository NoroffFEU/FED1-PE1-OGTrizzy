window.onload = function() {
    // function for deliver the post to the api
    function sendPost(image, text, alt, title) {
      let data = { 
        title: title, 
        body: text, 
        media: {
          url: image,
          alt: alt
        }
      };

      let accessToken = localStorage.getItem('accessToken');
      let user = JSON.parse(localStorage.getItem('user'));
      let url = `https://v2.api.noroff.dev/blog/posts/${user.name}`;
  
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        },
        body: JSON.stringify(data),
      })
      .then((response) => {
        if (!response.ok){
            throw new Error('network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        alert('Posted successfully!');
    })
    .catch(error => {
        console.error('error:', error);
        alert('Posting failed');
})
    }
  
    // adds a eventlistener for post button
    document.querySelector('button').addEventListener('click', function() {
      sendPost(
        document.getElementById('imageInput').value, 
        document.getElementById('textInput').value,
        document.getElementById('altInput').value,
        document.getElementById('titleInput').value
      );
    });
  }