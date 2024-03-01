// Affiche la proposition
function AfficherProposition(Proposition) {
  zoneProposition.innerHTML = Proposition;
}

// Affiche le score et le pourcentage
function AfficherScore(score, pourcentage) {
  spanzoneScore.textContent = score;
  Pourcentage.textContent = pourcentage;
  Pourcentage.style.color = pourcentage < 50 ? "red" : "green";
  Pourcentage.style.fontWeight = 900;
  Sym.style.color = Pourcentage.style.color;
  Sym.style.fontWeight = Pourcentage.style.fontWeight;
}

// Affiche le message d'erreur
function AfficherMessageErreur(error) {
  let spanErrorMessage = document.getElementById("spanerrormessage");
  if (!spanErrorMessage) {
    let texteErreur = document.querySelector(".Er");
    spanErrorMessage = document.createElement("span");
    spanErrorMessage.id = "spanerrormessage";
    texteErreur.appendChild(spanErrorMessage);
  }
  spanErrorMessage.innerText = error;
  console.log(error);
}

// Vérifie la validité du nom
function VerifierNom(DomE, nom) {
  if (nom.length < 2) {
    DomE.classList.remove("DomE");
    DomE.classList.add("Error");
    throw new Error("Le nom est trop court");
  } else {
    DomE.classList.remove("Error");
    DomE.classList.add("DomE");
  }
}

// Vérifie la validité de l'email
function VerifierMail(Dom, email) {
  let regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]");
  if (!regex.test(email)) {
    Dom.classList.remove("Dom");
    Dom.classList.add("Error");
    throw new Error("L'email est invalide");
  } else {
    Dom.classList.remove("Error");
    Dom.classList.add("Dom");
  }
}

// Envoie un email avec les détails du score
function EnvoyerEmail(nom, email, score) {
  let ip = `http://192.168.34.249:7500`;
  let message = `mailto:${email}?subject=Partage Du Score&body=Salut je suis ${nom} et je viens de faire un score de ${score} sur l'application TimeSquard! voici lien ${ip}`;
  location.href = message;
}

// Lance le jeu
function LancerJeu() {
  let i = 0;
  let score = 0;
  let proposition;
  let capitale;
  let p;

  AfficherProposition("");

  btnValiderMot.addEventListener("click", () => {
    let reponse = inputEcriture.value.trim().toLowerCase();
    if (reponse === capitale[i]) {
      score++;
    }
    inputEcriture.value = "";
    i++;
    if (proposition[i] === undefined) {
      AfficherProposition("Fin Du Jeu");
      btnValiderMot.style.backgroundColor = "red";
      btnValiderMot.disabled = true;
    } else {
      AfficherProposition(proposition[i]);
    }
    let a = `${score}/${i}`;
    p = ((score / i) * 100).toFixed(0);
    AfficherScore(a, p);
  });

  let optionsSource = document.querySelectorAll(".optionSource input");
  optionsSource.forEach((option) => {
    option.addEventListener("click", () => {
      let choix = option.value;
      ChoixAjouer(choix);
      optionsSource.forEach((o) => {
        if (o !== option) {
          o.disabled = true;
        }
      });
    });
  });

  function ChoixAjouer(choix) {
    switch (choix) {
      case "Afrique":
        proposition = PAF;
        capitale = CapitaleAfrique;
        break;
      case "Europe":
        proposition = PEU;
        capitale = CapitaleEurope;
        break;
      case "Asie":
        proposition = PAS;
        capitale = CapitaleAsie;
        break;
      case "Amérique":
        proposition = PAM;
        capitale = CapitaleAmerique;
        break;
      default:
        break;
    }
    AfficherProposition(proposition[i]);
  }

  Form.addEventListener("submit", (e) => {
    e.preventDefault();
    let scoreEmail = `${score}/${i} soit un taux de ${p}%`;
    try {
      Nom.addEventListener("change", (e) => {
        console.log(e.target.value);
      });
      VerifierNom(DomE, Nom.value);
      VerifierMail(Dom, Email.value);
      EnvoyerEmail(Nom.value, Email.value, scoreEmail);
      AfficherMessageErreur("");
      popupBackground.classList.remove("active");
      Nom.value = "";
      Email.value = "";
    } catch (e) {
      AfficherMessageErreur(e.message);
    }
  });
}

LancerJeu();
