// Change text color onHover
const hoverText = document.getElementById("hover-color-change");

hoverText.onmouseover = () => {
    hoverText.style.color = "#EC6B78";
};

// Changes color back to original on mouse out
hoverText.onmouseout = () => {
    hoverText.style.color = "#000000";
};


// Text color when button is clicked
const button = document.getElementById("change-color");
const textOnClick = document.getElementById("change-color-onClick");

button.onclick = () => {
    textOnClick.style.color = "#FF6B78";
}


// Slideshow
let slideIndex = 0;

const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? "block" : "none";
    });
};

const nextSlide = () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
};

const prevSlide = () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
};

prev.onclick = prevSlide;
next.onclick = nextSlide;
showSlide(slideIndex);
