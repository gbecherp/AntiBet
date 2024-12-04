// JavaScript code for interactivity

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Check localStorage for dark mode preference
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', () => {
        const isDarkEnabled = document.body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', isDarkEnabled); // Save preference
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const categoriesContainer = document.querySelector('.categories');

    fetch('./profissionais.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(professional => {
                // Criar elemento para cada profissional
                const category = document.createElement('div');
                category.classList.add('category');
                category.dataset.id = professional.id;

                category.innerHTML = `
                    <img src="${professional.image}" alt="${professional.name}">
                    <span>${professional.name}, ${professional.title}</span>
                `;

                // Adicionar evento de clique
                category.addEventListener('click', () => {
                    showModal(professional);
                });

                categoriesContainer.appendChild(category);
            });
        })
        .catch(error => console.error('Erro ao carregar os profissionais:', error));
});

function showModal(professional) {
    const modal = document.querySelector('.modal');
    const modalOverlay = document.querySelector('.modal-overlay');

    // Atualizar conteúdo do modal
    modal.innerHTML = `
        <h2>${professional.name}</h2>
        <h3>${professional.title}</h3>
        <p>${professional.description}</p>
        <p><strong>Especialidades:</strong> ${professional.specialties.join(', ')}</p>
        <p><strong>Contato:</strong> ${professional.contact.email} | ${professional.contact.phone}</p>
        <p><strong>Localização:</strong> ${professional.location}</p>
        <button class="close-modal">Fechar</button>
    `;

    // Exibir modal e overlay
    modal.classList.add('visible');
    modalOverlay.classList.add('visible');

    // Fechar modal ao clicar no botão
    modal.querySelector('.close-modal').addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
}

function closeModal() {
    const modal = document.querySelector('.modal');
    const modalOverlay = document.querySelector('.modal-overlay');

    modal.classList.remove('visible');
    modalOverlay.classList.remove('visible');
}



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
    const botaoForum = document.getElementsByClassName("botaoForum");

    Array.from(botaoForum).forEach(button => {
        button.addEventListener("click", () => {
            window.location.href = "./../forum/index.html";
        });
    });

    queroAjudarButton.addEventListener("click", () => {
        window.location.href = "./../cadastro-profissional/index.html";
    });
});

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
