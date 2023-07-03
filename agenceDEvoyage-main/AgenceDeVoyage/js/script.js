
// Sélection du bouton de menu et de la barre de navigation
const menubtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');

// Ajout d'un écouteur d'événements sur le bouton de menu pour détecter les clics
menubtn.addEventListener('click',()=>{
    navbar.classList.toggle('active');
    menubtn.classList.toggle('fa-times');
})

// Gestionnaire d'événements pour le défilement de la fenêtre
window.onscroll = () =>{
    menubtn.classList.remove('fa-times')
    navbar.classList.remove('active')
  }

// Initialisation du carrousel Swiper pour le slider d'accueil
const swiper = new Swiper('.home-slider', {
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });