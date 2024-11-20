// Toggle sidebar visibility on mobile
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const content = document.querySelector('.content');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
    content.classList.toggle('full-width');
});

// Toggle dark mode
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Popup functionality
const pedirAjudaButton = document.getElementById('pedirAjudaButton');
const helpPopup = document.getElementById('help-popup');
const popupClose = document.querySelector('.popup-close');

pedirAjudaButton.addEventListener('click', () => {
    helpPopup.classList.add('visible');
});

popupClose.addEventListener('click', () => {
    helpPopup.classList.remove('visible');
});

// Close popup when clicking outside content
window.addEventListener('click', (e) => {
    if (e.target === helpPopup) {
        helpPopup.classList.remove('visible');
    }
});
