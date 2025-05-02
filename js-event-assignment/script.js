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


// form Validation
const form = document.getElementsByClassName('registerForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Validate on submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateField(username, isNotEmpty, "Username is required!");
    validateField(email, isValidEmail, "Please enter a valid email!");
    validateField(password, isValidPassword, "Passord must be at least 8 characters long!");

    const allValid = [...form.querySelectorAll('input')].every(input =>
        input.classList.contains('valid')
    );

    if (allValid) {
        alert("Form submitted successfully!");
        form.submit();
    }
});

// Realtime validation
[username, email, password].forEach(input => {
    input.addEventListener('input', () => {
        switch (input.id) {
            case 'username':
                validateField(input, isNotEmpty, "Username is required!");
                break;
            case 'email':
                validateField(input, isValidEmail, "Please enter a valid email!");
                break;
            case 'password':
                validateField(input, isValidPassword, "Password must be at least 8 characters long!");
                break;
        }
    });

    password.addEventListener('input', () => {
        validateField(password, isValidPassword, "Password must be at least 6 characters");
        updateStrengthMeter(password.value);
      });
});

function updateStrengthMeter(password) {
    const strengthBar = document.getElementById('strength-bar');
    const strengthText = document.getElementById('strength-text');
  
    let strength = 0;
  
    if (password.length >= 6) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^A-Za-z0-9]/)) strength++;
  
    // Cap at 3
    strength = Math.min(strength, 3);
  
    const strengthLevels = [
      { width: '33%', color: 'red', text: 'Weak' },
      { width: '66%', color: 'orange', text: 'Medium' },
      { width: '100%', color: 'green', text: 'Strong' }
    ];
  
    if (password.length === 0) {
      strengthBar.style.width = '0%';
      strengthText.textContent = '';
    } else {
      const level = strengthLevels[strength - 1];
      strengthBar.style.width = level.width;
      strengthBar.style.backgroundColor = level.color;
      strengthText.textContent = level.text;
    }
  }

// Validation functions
function validateField(input, testFn, message) {
    const error = input.nextElementSibling;
    if (testFn(input.value)) {
      input.classList.add('valid');
      input.classList.remove('invalid');
      error.style.display = 'none';
      error.textContent = '';
    } else {
      input.classList.add('invalid');
      input.classList.remove('valid');
      error.style.display = 'block';
      error.textContent = message;
    }
  }
  
  function isNotEmpty(value) {
    return value.trim() !== '';
  }
  
  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
  
  function isValidPassword(value) {
    return value.length >= 8;
  }