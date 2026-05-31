// Banner Slider

let slides = document.querySelectorAll(".slide");
let current = 0;

function nextSlide() {

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){
        current = 0;
    }

    slides[current].classList.add("active");
}

setInterval(nextSlide, 4000);


// Fade In Animation

const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {

    faders.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            item.classList.add("show");
        }

    });

});


// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
