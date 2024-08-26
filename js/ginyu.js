let currentSlide = 0;
let slides = document.querySelectorAll('.slides img');
let dots = document.querySelectorAll('.dot');
let slideInterval;

function showSlide(index) {
    if (index < 0 || index >= slides.length || index === currentSlide) {
        return;
    }
    currentSlide = index;
    updateSlide();
    moveSlides();
}

function nextSlide() {
    stopSlideInterval(); // Para o intervalo de avanço automático antes de avançar manualmente
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
    moveSlides();
    startSlideInterval(); // Reinicia o intervalo de avanço automático após a navegação manual
}

function prevSlide() {
    stopSlideInterval(); // Para o intervalo de avanço automático antes de voltar manualmente
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
    moveSlides();
    startSlideInterval(); // Reinicia o intervalo de avanço automático após a navegação manual
}

function moveSlides() {
    const slideWidth = slides[0].clientWidth;
    const offset = -currentSlide * slideWidth;
    document.querySelector('.slides').style.transform = `translateX(${offset}px)`;
}

function updateSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('active');
            dots[index].classList.add('active');
            stopSlideInterval();
        } else {
            slide.classList.remove('active');
            dots[index].classList.remove('active');
        }
    });
}

function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 9000); 
}

function stopSlideInterval() {
    clearInterval(slideInterval); // Para o intervalo de avanço automático dos slides
}

// Adiciona um listener de evento para detectar mudanças no tamanho da tela
window.addEventListener('resize', function() {
    moveSlides();
});

// Verifica se a página foi recarregada e remove a âncora da URL
window.onload = function() {
    history.replaceState("", document.title, window.location.pathname + window.location.search);
    startSlideInterval(); // Inicia o intervalo de avanço automático dos slides quando a página é carregada
};

// Atualiza o slide inicial
updateSlide();

let clickCount = 0;
const logo = document.getElementById('logo');
const audio = document.getElementById('audio');

logo.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 20) {
        audio.play();
        logo.innerHTML = `<img src="segredo/logoLobisomemPidao.png" alt="Logo LobisomemPidao">  <p>Lobisomem Pidão</p>`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const arrowContainer = document.querySelector('.arrowcontainer');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            arrowContainer.classList.add('visible');
        } else {
            arrowContainer.classList.remove('visible');
        }
    });
});

// Menu Responsivo ================================//

function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var opcoes = document.querySelector('.opcoes');

    menuIcon.classList.toggle('change');
    opcoes.classList.toggle('show');
}

// Transição automatica mobile merch ===============//

document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todas as img-container
    const imgContainers = document.querySelectorAll(".img-container");

    imgContainers.forEach((container) => {
        let mainImg = container.querySelector(".main-img");
        let hoverImg = container.querySelector(".hover-img");
        let isMainVisible = true;

        // Define a transição automática a cada 5 segundos
        setInterval(() => {
            if (isMainVisible) {
                mainImg.style.opacity = "0";
                hoverImg.style.opacity = "1";
            } else {
                mainImg.style.opacity = "1";
                hoverImg.style.opacity = "0";
            }
            isMainVisible = !isMainVisible;
        }, 5000);
    });
});




