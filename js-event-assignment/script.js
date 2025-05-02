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