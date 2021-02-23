console.log("hi index port")
window.onscroll = function () { myFunction() };

function myFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.querySelector('.topbtn').style.display = "block";
  } else {
    document.querySelector('.topbtn').style.display = "none";
  }
}
// ######## intersection observer############
const sections = document.querySelectorAll('section');
const options = {
  root: null,
  threshold: 0,
  rootMargin: "0 0 -500px 0" //-means its work if its below the page
};
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return
    }
    entry.target.classList.toggle("fade");
    console.log(entry.target);
    observer.unobserve(entry.target);


  })
});
sections.forEach(function (section) {
  observer.observe(section);
});

// ##################burger#################
let burger = document.querySelector('#burger');
let navcross = document.querySelector('#nav-cross');
function navshow(){
  document.querySelector('.nav-links').style.display="block";
};

function navhide(){
  document.querySelector('.nav-links').style.display="none";
};

function navgo(){
  document.querySelector('.nav-links').style.display="none";
};
