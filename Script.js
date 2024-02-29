/*Afficger Proposition*/
function AfficherProposition(Proposition) {
  zoneProposition.innerHTML = Proposition;
}
function AfficherEmail(nom, email, score) {
  let Message = `mailto:${email}?subject=Partage Du Score&body=Salut je suis ${nom} et je viens de faire un score de ${score} sur l'application TimeSquard !`;
  location.href = Message;
}
function AfficherScore(score, centage) {
  spanzoneScore.textContent = score;
  Pourcentage.textContent = centage;
  if (centage < 50) {
    Pourcentage.style.color = "red";
    Pourcentage.style.fontWeight = 900;
    Sym.style.color = "red";
    Sym.style.fontWeight = 900;
  } else {
    Pourcentage.style.color = "green";
    Pourcentage.style.fontWeight = 900;
    Sym.style.color = "green";
    Sym.style.fontWeight = 900;
  }
}
/*jeu A jouer*/

/*function lancer jey */
function lancerJeu() {
  let Proposition;
  let Capitale;
  let i = 0;
  let Score = 0;
  let P;
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
    PCtage = (Score / i) * 100;
    P = `${PCtage.toFixed(0)}`;
    // AfficherProposition(Proposition[i]);
    AfficherScore(A, P);
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
  function VerrifierNom(nom) {
    if (nom < 2) {
      throw new Error("Mot trop cour");
    }
  }
  function VerrifierMail(email) {
    let Regex = new RegExp("[a-z0-9_-]+@[a-z0-9_-]+\\.[a-z0-9_-]");
    if (!Regex.test(email)) {
      throw new Error("Email invalide");
    }
  }
  Form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ScoreEmail = `${Score}/${i} soit un taux de ${P}%`;
    try {
      VerrifierNom(Nom.value);
      VerrifierMail(Email.value);
      AfficherEmail(Nom.value, Email.value, ScoreEmail);
    } catch (e) {
      console.log(e.message);
    }
  });
}
lancerJeu();
