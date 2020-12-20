// Appel de la fonction
let p = calculPerimetre(3); // 3 est ici la valeur de l'argument

/**
 * Fonction qui attend en paramètre un nombre réel positif
 * et qui renvoie le périmètre du cercle dont le rayon correspond à ce nombre (nombre réel positif)
 * Le mot clé function déclenche du "hoisting". C'est comme si la fonction était déclarée en haut du fichier.
 * @param {number} rayon 
 * @return number
 */
function calculPerimetre(rayon) { // rayon est le paramètre attendu par la fonction
    return 2 * 3.141592 * rayon;
}

console.log("Perimetre pour un rayon de 3 : ", p);


// fonction constructeur
function Voiture(peinture, modele, nbr_roues) {
    this.peinture = peinture;
    this.modele = modele;
    
    this.affiche = () => {
        console.log(`Ma ${this.modele} est ${this.peinture} et possède ${this.nbr_roues} roues.`);
    }
}

Voiture.prototype.nbr_roues = 4; //protocole à l'extérieur de la fonction constructeur

const v = new Voiture("bleue", "Mercedes", 10);
console.log(v.affiche());