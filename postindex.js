function displayBlogInfo(){
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');

    let url = `https://v2.api.noroff.dev/blog/posts/Tristian/${blogId}`;
    fetch(url)
    .then((response) => response.json())
    .then (data => {
        const imageElement = document.getElementById('image');
        imageElement.src = data.data.media.url;
        imageElement.alt = data.data.media.alt;
        let title = document.getElementById('title');
        title.textContent = data.data.title;
        let blogText = document.getElementById('blog-text');
        blogText.textContent = data.data.body;
        
        let editButton = document.getElementById('editButton');
        editButton.addEventListener('click', function(){
            window.location.href = `edit.html?id=${blogId}`;
        });
    
        document.body.appendChild(post);
    })
    .catch(error => console.error('error:', error))
}

window.onload = displayBlogInfo;