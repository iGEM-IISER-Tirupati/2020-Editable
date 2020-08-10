const carouselSlide = document.querySelector('.carousel-slide');
const contentSlide = document.querySelector('.content-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const carouselContent = document.querySelectorAll('.content-slide div');
const image = document.querySelector('.image');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nxtBtn = document.querySelector('#nxtBtn');

let size = image.clientWidth;
let counter = 1;

carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
contentSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

//window-innerWidth  //counter
function wWidth() {
  size = image.clientWidth;
  carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
  contentSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
}

//button control

nxtBtn.addEventListener('click', () => {
  if(counter>=carouselImages.length-1)return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  contentSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
  contentSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if(counter<=0)return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  contentSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
  contentSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
  console.log(carouselImages[counter]);
  if(carouselImages[counter].id === 'lastClone'){
  carouselSlide.style.transition = "none";
  contentSlide.style.transition = "none";
  counter = carouselImages.length -2;
  carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
  contentSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
}
  if(carouselImages[counter].id === 'firstClone'){
  carouselSlide.style.transition = "none";
  contentSlide.style.transition = "none";
  counter = carouselImages.length -counter;
  carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
  contentSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
}
});

var headerMobile = document.getElementById("header-mobile");
var stickyMobile = headerMobile.offsetTop;
var contentMobile = document.getElementById("page-contentMobile");

//var header = document.getElementById("header");
//var sticky = header.offsetTop;
//var content = document.getElementById("page-content"); 

window.onscroll = function() {stickyFunctionMobile(); stickyFunction();};

function stickyFunctionMobile() {
  if (window.pageYOffset > stickyMobile) {
    headerMobile.classList.add("sticky-mobile");
    contentMobile.classList.add("scroll-compensationMobile");
  } else {
    headerMobile.classList.remove("sticky-mobile");
    contentMobile.classList.remove("scroll-compensationMobile");
  }
}

function stickyFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    content.classList.add("scroll-compensation");
  } else {
    header.classList.remove("sticky");
    content.classList.remove("scroll-compensation");
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(id) {
  document.getElementById(id).classList.toggle("show");
  document.getElementsById(id).style.transition = "all 0.4s ease-in-out";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


const carouselSlide768 = document.querySelector('.carousel-slide768');
const carouselContent768 = document.querySelectorAll('.carousel-slide768 div');
const memberContent768 = document.querySelector('.member-content');

//buttons
const prevBtn768 = document.querySelector('#prevBtn');
const nxtBtn768 = document.querySelector('#nxtBtn');

let size768 = memberContent768.clientWidth;
let counter768 = 1;

carouselSlide768.style.transform = 'translateX(' + (-size768*counter768) + 'px)';


//window-innerWidth  //counter
function wWidth768() {
  size768 = memberContent768.clientWidth;
  carouselSlide768.style.transform = 'translateX(' + (-size768*counter768) + 'px)';
}

//button control

nxtBtnBig.addEventListener('click', () => {
  if(counter768>=carouselContent768.length-1)return;
  carouselSlide768.style.transition = "transform 0.4s ease-in-out";
  counter768++;
  carouselSlide768.style.transform = 'translateX(' + (-size768*counter768) + 'px)';
});

prevBtnBig.addEventListener('click', () => {
  if(counter768<=0)return;
  carouselSlide768.style.transition = "transform 0.4s ease-in-out";
  counter768--;
  carouselSlide768.style.transform = 'translateX(' + (-size768*counter768) + 'px)';
});

carouselSlide768.addEventListener('transitionend', () => {
  if(carouselContent768[counter768].id === 'lastCloneBig'){
  carouselSlide768.style.transition = "none";
  counter786 = carouselContent768.length -2;
  carouselSlide768.style.transform = 'translateX(' + (-size768*counter768) + 'px)';
}
  if(carouselImages768[counter786].id === 'firstCloneBig'){
  carouselSlide768.style.transition = "none";
  counter786 = carouselContent768.length -counter786;
  carouselSlide768.style.transform = 'translateX(' + (-size768*counter768) + 'px)';
}
});
