// Play video on page load
var video = document.querySelector("#bg-video");
if (video !== null)
    video.play();

// Open side navigation on menu click
var menu = document.querySelector(".menuBtn");
var sideNav = document.querySelector(".side-nav");
menu.onclick = function() {
    sideNav.style.width = "80%";
};

// Close side navigation on click on cross
var closeBtn = document.querySelector(".close-sideNav");
closeBtn.onclick = function() {
    sideNav.style.width = "0";
};

var nav = document.querySelector(".navbar");
// Make nav sticky
function stickNav() {
    nav.classList.add("sticky-nav");
};

function unstickNav() {
    nav.classList.remove("sticky-nav");
};

if (window.scrollY >= 102) {
    stickNav();
};

// change header on scroll
window.addEventListener("scroll", function() {
    if (window.scrollY >= 102) {
        stickNav();
    } else {
        unstickNav();
    }
});

function togglePopup() {
    document.getElementById("popup-1")
        .classList.toggle("active");
};