// gérer la soumission du formulaire
const form = document.querySelector("form");
const input_euro = document.querySelector("#euro");
const input_chf = document.querySelector("#chf");

input_euro.oninput = function() {
  console.log("input dans euro");
  input_chf.value = convert(input_euro.value, "chf");
}

input_chf.oninput = function() {
  console.log("input dans chf");
  input_euro.value = convert(input_chf.value, "euro");
}

form.onsubmit = function(event) {
  event.preventDefault();
  console.log("Formulaire soumis");

  // récupération de la valeur entrée dans le champ des euros
  const euros = document.querySelector("#euro").value;
  console.log("valeur en euro : ", euros);

  //récupération de la valeur entrée dans le champ des chf
  const chf = document.querySelector("#chf").value;
  console.log("valeur en francs suisses : ", chf);

  // Affectation de la valeur calculée à l'input qui convient : champ euro ou ou champ chf
  if (chf == "") document.querySelector("#chf").value = convert(euros, "chf");
  else document.querySelector("#euro").value = convert(chf, "euro");
}

// form.onselect = function(e) {
//   document.querySelector("#euro").value = "";
//   document.querySelector("#chf").value = "";
// }

function convert(amount, currency) {
  if(currency == "chf") return amount * 1.06;
  else return amount / 1.06;
}