// JavaScript code for interactivity

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

// Read More Button
document.querySelector('.read-more-button').addEventListener('click', function() {
    alert('Read more about the Champion League!');
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
