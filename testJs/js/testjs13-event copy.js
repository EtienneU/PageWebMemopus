const h2 = document.createElement("h2");
window.document.body.appendChild(h2);
h2.textContent = "Titre de niveau 2";

//Exercice : ajout d'un paragraphe lors de l'évenement de click
const button_add = document.querySelector("#add-p"); //récupération de l'élément #app-p du DOM
button_add.onclick = function() {
    console.log("j'ai cliqué sur le bouton add");
    createAddDomElt("p", "Lorem ispom", document.querySelector("#paragraphes"));
}


/**
 * @param {string} tagname 
 * @param {string} text 
 * @param {DOM Element} parentElt 
 * @param {object} attributes 
 */
function createAddDomElt (tagname, text, parentElt = document.body, attributes) {
    let element = document.createElement(tagname);
    if(text) element.textContent = text;
    parentElt.appendChild(element);
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }    
}

createAddDomElt("h3", "Titre de niveau 3", document.body, {"id": "myh3", "class": "primary"});
createAddDomElt("span", " - Je squatte ici !", h2);
