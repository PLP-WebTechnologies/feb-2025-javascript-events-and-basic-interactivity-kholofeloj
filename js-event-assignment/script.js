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


// Tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');

        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(tab => tab.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});



// Accordion Section
const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const  content = button.nextElementSibling;
        const isActive = content.style.height && content.style.height !== "0px";

        // Close all other accordions
        document.querySelectorAll(".accordion-content").forEach(panel => {
            panel.style.height = "0";
            panel.classList.remove("active");
        });

        // Toggle current accordion
        if (!isActive) {
            content.style.height = content.scrollHeight + "px";
            content.classList.add("active");
        }
    });
});