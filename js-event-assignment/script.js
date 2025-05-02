// Change text color onHover
const hoverText = document.getElementById("hover-color-change");

hoverText.onmouseover = () => {
    hoverText.style.color = "#EC6B78";
};

// Changes color back to original on mouse out
hoverText.onmouseout = () => {
    hoverText.style.color = "#000000";
};