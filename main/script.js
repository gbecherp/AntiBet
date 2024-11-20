// JavaScript code for interactivity

// JavaScript for banner slides
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active", "prev");
            if (i === currentIndex) slide.classList.add("prev");
        });

        currentIndex = (index + slides.length) % slides.length; // Wrap around
        slides[currentIndex].classList.add("active");
    }

    prevButton.addEventListener("click", () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        showSlide(currentIndex + 1);
    });

    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000); // Auto-rotate every 5 seconds
});

// QueroAjudar script

document.addEventListener("DOMContentLoaded", () => {
    const queroAjudarButton = document.getElementById("queroAjudar");
    const acessarForum = document.getElementById("acessarForum");

    acessarForum.addEventListener("click", () => {
        window.location.href = "./../forum/index.html";
    })

    queroAjudarButton.addEventListener("click", () => {
        window.location.href = "./../cadastro-profissional/index.html"
    })
})

// JavaScript for Popup
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("help-popup");
    const openButton = document.querySelector(".deposit-button");
    const closeButton = document.querySelector(".popup-close");

    // Show the popup
    openButton.addEventListener("click", () => {
        popup.classList.add("visible");
    });

    // Hide the popup
    closeButton.addEventListener("click", () => {
        popup.classList.remove("visible");
    });

    // Close popup when clicking outside of the content
    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.classList.remove("visible");
        }
    });
});


// Toggle Bet Slip visibility
document.querySelector('.bet-slip-close').addEventListener('click', function() {
    document.querySelector('.bet-slip').style.display = 'none';
});

// Odds Buttons
const oddsButtons = document.querySelectorAll('.odd-button');
oddsButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert(`You selected odd: ${this.querySelector('span').innerText}`);
    });
});

// Tab Navigation
const liveTab = document.querySelector('.live-matches-tab');
const preTab = document.querySelector('.pre-matches-tab');

liveTab.addEventListener('click', () => {
    liveTab.classList.add('active');
    preTab.classList.remove('active');
    // Logic to display live matches
});

preTab.addEventListener('click', () => {
    preTab.classList.add('active');
    liveTab.classList.remove('active');
    // Logic to display pre-matches
});
