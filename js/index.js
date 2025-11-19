/* fonction qui révèle un texte  */

function slideToggle() {
  let box = document.getElementById('box');
  if (box.style.maxHeight && box.style.maxHeight !== '0px') {
    box.style.maxHeight = '0';
  } else {
    box.style.maxHeight = box.scrollHeight + 'px';
  }
}

/* Contenu section glisse de gauche à droite  */

let sliders = document.querySelectorAll('.slide-in-left');

let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

sliders.forEach(slide => {
  observer.observe(slide);
});

/* Apparition des logos seulement quand la section arrive à l’écran  */

document.addEventListener("DOMContentLoaded", () => {

    const logos = document.querySelectorAll(".ref-logo");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                // Optionnel : arrêter d'observer après apparition
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3 // déclenche à 30% visible
    });

    logos.forEach(logo => observer.observe(logo));
});

/* fonction afficher une alerte et changer de couleur  */

let monBouton = document.getElementById("bouton-alerte");
monBouton.addEventListener("mouseover", () => changerCouleurDuBouton(monBouton, "#fcaa13"));
monBouton.addEventListener("mouseout", () => changerCouleurDuBouton(monBouton, "#040800ff"));
monBouton.addEventListener("click", () => afficherUneAlerte());


function changerCouleurDuBouton(unBouton, couleur) {
  unBouton.setAttribute("style", "background-color:" + couleur);
}

function afficherUneAlerte() { alert("Appellez-nous sans plus tarder au 450 756-6363                    Présentez-vous au : 24 rue Hubert Joliette J6E 6R5 !"); }



