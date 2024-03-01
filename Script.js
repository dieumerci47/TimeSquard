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
  function AfficherMessageErreur(error){
    let spanerrormessage=document.getElementById("spanerrormessage")
    if(!spanerrormessage){
      let TexteErreur=document.querySelector(".Er")
      spanerrormessage=document.createElement("span");
      spanerrormessage.id="spanerrormessage"
  TexteErreur.appendChild(spanerrormessage)
}
spanerrormessage.innerText=error
    console.log(error);
  }
  function VerrifierNom(DomE,nom) {
    if (nom.length < 2) {

      DomE.classList.remove("DomE")
      DomE.classList.add("Error")
      throw new Error("Mot trop cour");
    }
    else{
      DomE.classList.remove("Error")
      DomE.classList.add("DomE")
    }
  }
  function VerrifierMail(Dom,email) {
    let Regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]");
    if (!Regex.test(email)) {
      
      Dom.classList.remove("Dom")
      Dom.classList.add("Error")
      throw new Error("Email invalide");
    }else{
      Dom.classList.remove("Error")
      Dom.classList.add("Dom")
    }
  }
  Form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ScoreEmail = `${Score}/${i} soit un taux de ${P}%`;
    try {
      Nom.addEventListener("change",(e)=>{
        console.log(e.target.value);
      })
      VerrifierNom(DomE,Nom.value);
      VerrifierMail(Dom,Email.value);
      AfficherEmail(Nom.value, Email.value, ScoreEmail);
      AfficherMessageErreur("")
      popupBackground.classList.remove("active")
      Nom.value=""
      Email.value=""
    } catch (e) {
      AfficherMessageErreur(e.message)
    } 
  });
}
lancerJeu();
