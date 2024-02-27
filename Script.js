/*Afficger Proposition*/
function AfficherProposition(Proposition) {
  zoneProposition.innerHTML = Proposition;
}
function AfficherScore(score) {
  spanzoneScore.textContent = score;
}
/*jeu A jouer*/

/*function lancer jey */
function lancerJeu() {
  let Proposition;
  let Capitale;
  let i = 0;
  let Score = 0;
  AfficherProposition("");

  btnValiderMot.addEventListener("click", () => {
    let Renponse = inputEcriture.value.trim().toLowerCase();
    if (Renponse === Capitale[i]) {
      Score++;
    }
    inputEcriture.value = "";
    i++;
    if (Proposition[i] === undefined) {
      AfficherProposition("Fin Du Jeu");
      btnValiderMot.style.backgroundColor = "red";
      btnValiderMot.disabled = true;
    } else {
      AfficherProposition(Proposition[i]);
    }
    let A = `${Score}/${i}`;
    // AfficherProposition(Proposition[i]);
    AfficherScore(A);
  });
  let optionSource = document.querySelectorAll(".optionSource input");
  for (let index = 0; index < optionSource.length; index++) {
    let Choix;
    optionSource[index].addEventListener("click", () => {
      Choix = optionSource[index].value;
      ChoixAjouer(Choix);

      for (let j = 0; j < optionSource.length; j++) {
        if (j !== index) {
          optionSource[j].disabled = true;
        }
      }
    });
  }
  function ChoixAjouer(Choix) {
    if (Choix === "Afrique") {
      Proposition = PAF;
      Capitale = CapitaleAfrique;
    } else if (Choix === "Europe") {
      Proposition = PEU;
      Capitale = CapitaleEurope;
    } else if (Choix === "Asie") {
      Proposition = PAS;
      Capitale = CapitaleAsie;
    } else if (Choix === "Amérique") {
      Proposition = PAM;
      Capitale = CapitaleAmerique;
    }
    AfficherProposition(Proposition[i]);
  }
}
lancerJeu();
