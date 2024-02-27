/*Declaration de la liste des pays */
let ListePaysAfrique = ["Congo", "Cameroun", "RDC", "Gabon", "CIV", "Mali"];
let ListePayEurope = ["France", "Italie", "Suisse", "Angleterre", "Allemagne"];
let ListePaysAmerique = ["USA", "Colombie", "Brazil", "Argentine"];
let ListePaysAsie = ["DGG", "Chine", "japon", "Corre"];

/*----------------------------------------------------------------*/
/*Declaration des capitales des pays*/
let CapitaleAfrique = [
  "brazzaville",
  "yaounde",
  "kin",
  "libreville",
  "abidjan",
  "bamako",
];
let CapitaleEurope = ["paris", "rome", "zurich", "londres", "berlin"];
let CapitaleAmerique = ["washington", "bogota", "rio", "aires"];
let CapitaleAsie = ["CHI", "PEKINTA", "COR"];

let PAF = Array.from(ListePaysAfrique, (item) => item.trim().toUpperCase());
let PEU = Array.from(ListePayEurope, (item) => item.trim().toUpperCase());
let PAM = Array.from(ListePaysAmerique, (item) => item.trim().toUpperCase());
let PAS = Array.from(ListePaysAsie, (item) => item.trim().toUpperCase());
