
// déclaration et affectation
// var est function scope. Donc si la variable n'est pas déclarée dans une fonction
// alors la variable devient globale

// Il n'y a pas de hoisting avec let et la variable ne peut pas être une variable globale
// let est block scope, donc sa portée réside dans son block courant. Elle "n'existe" pas en dehors. 
{
    let i = `Hello`; 
    console.log("i = ", i);
    i = 13;
    console.log("i = ", i);
}

//i = "Hello";
//i = true
//i = null;
//concaténation si i est une chaîne de caractères. Addition si i est un nombre.
//i = i + 5; 

var i = 12; /* En JS, pas besoin de spécifier le type de la variable */
var x = `chat` + i; /* + est un opérateur de concaténation ou d'addition, selon le type des variables */ 
var j = false;
var y = undefined;
var z = null;


console.log("i = ", i);
console.log("i = ", window.i);
console.log("i = ", this.i);  /* par défaut, this correspond à window */
console.log("type de la variable i : ", typeof(i));
console.log("x = ", x);

{
    var bim = 5;
    let bam = 12;
    console.log("valeur de bim dans le bloc : " + bim);
    console.log("valeur de bam dans le bloc : " + bam);
}
console.log("valeur de bim dans le contexte d'exécution global : " + bim);
console.log("valeur de bam dans le contexte d'exécution global : " + bam); 
//bam is not defined car la variable de type let est block scope










