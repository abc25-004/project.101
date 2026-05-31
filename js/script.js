let index = 0;
const slides = document.querySelectorAll(".banner img");

function showSlide() {
    slides.forEach(img => img.classList.remove("active"));
    slides[index].classList.add("active");

    index++;
    if (index >= slides.length) {
        index = 0;
    }
}

showSlide();
setInterval(showSlide, 3000);
