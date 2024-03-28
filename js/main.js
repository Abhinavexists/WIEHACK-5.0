// Function to scroll to the top of the page smoothly
var imageNumber = 1;
var imgcontainer = document.getElementById("header");
var fireImage = setInterval(function(){
  if (imageNumber < 101) {
    var imgURL = 'url(css/img/weihackvideo.gif' + (imageNumber < 10 ? '00' + imageNumber : (imageNumber < 100 ? '0' + imageNumber : imageNumber)) + '.png)';
    imgcontainer.style.backgroundImage = imgURL;
    imageNumber++;
  } else {
    clearInterval(fireImage);
  }
}, 33);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide the "back to top" button based on scroll position
window.onscroll = function() {
    var btn = document.getElementById("back-to-top-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

//navbar
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


