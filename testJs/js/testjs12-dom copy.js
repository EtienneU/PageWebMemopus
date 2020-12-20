const h2 = document.createElement("h2");

window.document.body.appendChild(h2);

h2.textContent = "Titre de niveau 2";

/**
 * 
 * @param {string} tagname 
 * @param {string} text 
 * @param {DOM Element} parent 
 */
const creaDom = (tagname, text, parent) => {
    let elt = document.createElement(tagname);
    elt.textContent = text;
    parent.appendChild(elt);
}

creaDom("p", "Je suis un paragraphe de fifou !", document.body);
creaDom("span", " - Je squatte ici !", h2);

/**
 * 
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