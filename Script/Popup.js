// Sélection du bouton "Partager" dans la zonePartage
let btnPartage = document.querySelector(".zonePartage button");

// Sélection de la div popupBackground
let popupBackground = document.querySelector(".popupBackground");

// Ajout d'un écouteur d'événement sur le bouton "Partager"
btnPartage.addEventListener("click", (event) => {
  // Empêche la propagation de l'événement de clic sur le bouton partagé
  event.stopPropagation();

  // Affiche la popupBackground en ajoutant la classe "active"
  popupBackground.classList.add("active");
});

// Ajout d'un écouteur d'événement sur le document
document.addEventListener("click", (event) => {
  // Si l'événement de clic provient de la popupBackground
  if (event.target === popupBackground) {
    // Cela signifie que l'utilisateur a cliqué en dehors du contenu de la popup
    // Donc on cache la popupBackground en enlevant la classe "active"
    popupBackground.classList.remove("active");
  }
});
