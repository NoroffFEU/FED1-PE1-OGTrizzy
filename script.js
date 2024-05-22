let url = "https://v2.api.noroff.dev/blog/posts/tristian";
fetch(url)
.then((response) => response.json())
.then(data => {
  console.log(data);
  let post = document.getElementsByClassName('post');

  for (let i = data.data.length -1, j = 0; i >= 0 && j < post.length; i--, j++){
    let img = document.createElement('img');
    img.src = data.data[i].media.url;
    img.alt = data.data[i].media.alt;

    post[j].appendChild(img);//this is to put the img to the post thing
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

