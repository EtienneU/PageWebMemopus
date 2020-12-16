
/* Exemples de fonctions anonymes immédiates */

(function() {
  var i = 12;
    console.log("Je suis dans ma fonction anonyme immédiate");
})(); // les () appelent la fonction anonyme


(function(str) {    
  var a = 23; 
  console.log(str + " Fonction anonyme exécutée ! ", a);
})("Qui suis-je ?");  //ici j'ai utilisé un argument passé en paramètre