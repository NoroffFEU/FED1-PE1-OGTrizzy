function loadBlogPost(){
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');

    let url = `https://v2.api.noroff.dev/blog/posts/Tristian/${blogId}`;
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        document.getElementById('imageInput').value = data.data.media.url;
        document.getElementById('altInput').value = data.data.media.alt;
        document.getElementById('titleInput').value = data.data.title;
        document.getElementById('textInput').value = data.data.body;
    })
    .catch(error => console.error('error:', error));

    document.getElementById('update').addEventListener('click', updatePost);
    document.getElementById('delete').addEventListener('click', deletePost);
}

function updatePost(){
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');
    let url = `https://v2.api.noroff.dev/blog/posts/Tristian/${blogId}`;
    let accessToken = localStorage.getItem('accessToken');
    let updateData = {
        title: document.getElementById('titleInput').value,
        body: document.getElementById('textInput').value,
        media: {
            url: document.getElementById('imageInput').value,
            alt: document.getElementById('altInput').value
        }
    };
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
        body: JSON.stringify(updateData)
    })
    .then((response) => {
        if (!response.ok){
            throw new Error('network response was not ok');
        }
        return response.json();
    })
    .then(alert('Updated success!'))
    .catch(error => {
        console.error('error:', error);
        alert('Update failed');
})
}

function deletePost(){
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');
    let url = `https://v2.api.noroff.dev/blog/posts/Tristian/${blogId}`;
    let accessToken = localStorage.getItem('accessToken');
    fetch(url,{
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('network response was not ok');
        }
        return response.json();
    })
    .then(alert('Deleted the post'))
    .catch(error => {
        console.error('error:', error);
        alert('Delete failed');
})
}


window.onload = loadBlogPost;