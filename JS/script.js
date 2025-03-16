// Elementos del DOM
const closeWindow = document.getElementById("closeWindow");
const thankContainer = document.getElementById("thankContainer");
const modal = document.getElementById("exitModal");
const closeBtn = document.querySelector(".close");
const aboutDropdown = document.getElementById('aboutDropdown');
const aboutTitle = document.getElementById('aboutTitle');

// Variables de estado
let formSubmitted = false;
let showModal = true;
let canShowModal = false;

// Funciones para el contenedor de agradecimiento
function showThankYou() {
    thankContainer.classList.remove("Cerrar");
    thankContainer.classList.add("thank-you-container-show");
}

function hideThankYou() {
    thankContainer.classList.remove("thank-you-container-show");
    thankContainer.classList.add("Cerrar");
}

// Funciones para el modal
function showExitModal() {
    modal.style.display = "block";
}

function hideExitModal() {
    modal.style.display = "none";
}

// Temporizador para el modal de salida
setTimeout(() => {
    canShowModal = true;
}, 3000);

// Event Listeners para el modal de salida
document.addEventListener("mouseleave", e => {
    if (e.clientY <= 0 && showModal && !formSubmitted && canShowModal) {
        showExitModal();
        showModal = false;
    }
});

closeBtn.onclick = hideExitModal;

// Manejador de clics fuera de los popups
window.onclick = e => {
    // Para el modal de salida
    if (e.target === modal) {
        hideExitModal();
    }
    // Para el contenedor de agradecimiento
    if (e.target === thankContainer) {
        hideThankYou();
    }
    // Para el dropdown de About
    if (!e.target.matches('#aboutTitle') && aboutDropdown.classList.contains('show')) {
        aboutDropdown.classList.remove('show');
    }
};

closeWindow.addEventListener("click", hideThankYou);

// Event listener para el About dropdown
aboutTitle.addEventListener('click', function (event) {
    aboutDropdown.classList.toggle('show');
    event.stopPropagation();
});

// Event listener para la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Cerrar el modal de salida
        if (modal.style.display === "block") {
            hideExitModal();
        }
        // Cerrar el contenedor de agradecimiento
        if (thankContainer.classList.contains("thank-you-container-show")) {
            hideThankYou();
        }
        // Cerrar el dropdown de About
        if (aboutDropdown.classList.contains('show')) {
            aboutDropdown.classList.remove('show');
        }
        // Cerrar el popup de reviews
        if (popup.classList.contains('active')) {
            popup.classList.remove('active');
        }
    }
});

// Reviews popup code (updated)
const reviewsHeading = document.getElementById('reviews');
const popup = document.getElementById('reviewsPopup');
const closeButton = document.getElementById('close-button');
const popupContent = document.querySelector('.popup-content'); // Add this line

reviewsHeading.addEventListener('click', () => {
    popup.classList.add('active');
});

closeButton.addEventListener('click', () => {
    popup.classList.remove('active');
});

// Updated click handler for reviews popup
popup.addEventListener('click', (e) => {
    // Check if the click is outside the popup content
    if (!popupContent.contains(e.target) && e.target !== popupContent) {
        popup.classList.remove('active');
    }
});

// Prevent click inside popup content from bubbling up
popupContent.addEventListener('click', (e) => {
    e.stopPropagation();
});

// El resto del código permanece igual...

$(function () {
    // Definir la secuencia de animaciones
    const animations = [
        { element: '#firstScreen', class: 'firstScreenAnimation', delay: 750 },
        { element: '#firstScreen', class: 'secondScreenAnimation', delay: 2250 },
        { element: '#main', class: 'mainAnimation', delay: 3250 },
        { element: '#main', class: 'mainThirdAnimation', delay: 4250 },
        { element: '#main', class: 'mainFourthAnimation', delay: 4750 },
        { element: '#main', class: 'mainSecondAnimation', delay: 5250 },
        { element: '#main', class: 'mainFifthAnimation', delay: 5550 },
        { element: '#section', class: 'sectionAnimation', delay: 6250 }
    ];

    // Función para aplicar las animaciones
    function applyAnimation({ element, class: className, delay }) {
        setTimeout(() => {
            $(element).addClass(className);
        }, delay);
    }

    // Aplicar todas las animaciones
    animations.forEach(applyAnimation);
});
