let user = JSON.parse(localStorage.getItem('user'));
let url = `https://v2.api.noroff.dev/blog/posts/Tristian`;
fetch(url)
.then((response) => response.json())
.then(data => {
  let post = document.getElementsByClassName('post');

  for (let i = 0, j = 0; i < data.data.length && j < post.length; i++, j++){//this is for making the newest post come first
    let img = document.createElement('img');
    img.src = data.data[i].media.url;
    img.alt = data.data[i].media.alt;
    let title = document.createElement('h2');
    title.textContent = data.data[i].title; //text for title under images when post are showing
    let link = document.createElement('a');
    link.href = `post/index.html?id=${data.data[i].id}`; //link to post
    link.appendChild(img);
    link.appendChild(title);


    post[j].appendChild(link);//this is to put the link to the post thing
  }
})
.catch(error => console.error('Error:', error));


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {//next and previous control
  showSlides(slideIndex += n);
}

function currentSlide(n) {//image control
  showSlides(slideIndex = n);
}

function showSlides(n) {//show slides
  let i;
  let slides = document.getElementsByClassName("post-carousel");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

fetch(url)
.then((response) => response.json())
.then((data) => {
  let slides = document.getElementsByClassName('post-carousel');

  if (data.data.length >= 3 && slides.length >= 3){
    for (let i = 0; i < 3; i++){
      let img = slides[i].getElementsByTagName('img')[0];
      let text = slides[i].getElementsByClassName('text')[0];
      img.src = data.data[i].media.url;
      img.alt = data.data[i].media.alt;
      text.textContent = data.data[i].title;

      [img, text].forEach(element => {
          element.addEventListener('click',()=> {
          window.location.href = `post/index.html?id=${data.data[i].id}`;
        });
      element.style.cursor = 'pointer';
      });
    }
  }
})
.catch(error => console.error('error:', error));