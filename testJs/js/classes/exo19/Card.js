import CoopDom from "../CoopDom.js";
export default class Card extends CoopDom {

    constructor(question, answer, column, added = false) {
        super();
        this.question = question;
        this.answer = answer;
        this.column = column;
        this.added = added; // carte ajoutée (added = true) ou carte existance (added = false)
        
        // construction du dom de la carte
        this.domElements = this.render();

        // gestion des événements
        this.handleEvents();

    }

    handleEvents = () => {
        // suppression d'une carte
        this.domElements.button_remove.onclick = () => {
            console.log("click sur le bouton pour supprimer une carte");
            console.log("this dans onclick du bouton de suppression de carte : ", this);
            this.column.removeCard(this);
        }

        // affichage du formulaire au click sur le bouton modifier
        this.domElements.button_edit.onclick = () => {
            this.domElements.form_edit.hidden = false;
        }

        // gestion de la soumission du formulaire de modification
        this.domElements.form_edit.onsubmit = (event) => {
            console.log("Gestion de la soumission du formulaire de modification");
            event.preventDefault();

            // Récupération des nouvelles valeurs
            const new_question = this.domElements.input_question.value;
            const new_answer = this.domElements.input_answer.value;

            // Modification à la fois des propriétés question et answer
            // mais aussi des éléments du dom correspondant
            this.question = new_question;
            this.domElements.question.textContent = new_question;
            this.answer = new_answer;
            this.domElements.answer.textContent = new_answer;

            // on cache le formulaire
            this.domElements.form_edit.hidden = true;
        }

        // Au clique de mon bouton "Valider", j'affecte de nouvelles valeurs à Question et Answer
        // et je choisis l'afficher standard : Question, bouton Supprimer et bouton Modifier
        this.domElements.button_submit_edit.onclick = (e) => {
            console.log("Je clique sur le bouton Valider");
            e.preventDefault();

            this.domElements.question.textContent = this.domElements.input_question.value;
            this.domElements.answer.textContent = this.domElements.input_answer.value;

            this.domElements.form_edit.hidden = true;
            this.domElements.question.hidden = false;
            this.domElements.answer.hidden = true;
            this.domElements.button_edit.hidden = false;
        }

        // Afficher/cacher la réponse lors du click sur la question
        this.domElements.question.onclick = (e) => {
            console.log("Je viens de cliquer sur une question");
            if (this.domElements.answer.hidden) {
                this.domElements.answer.hidden = false;
            } else {
                this.domElements.answer.hidden = true;
            }
            /* j'ai essayé de passer par la création d'une variable locale qui stocke 
            la propriété hidden de answer mais ça n'a pas aboutit :

            let answer_visib = this.domElements.answer.hidden;
            if (answer_visib = true) {
                answer_visib = false;
            } else {
                answer_visib = true;
            }

            */
        }
    }

    render = () => {
        console.log("Dans la fonction render de Card");

        // Création  des éléments du DOM grâce à la méthode createAddDomElt héritée de CoopDom
        const article = this.createAddDomElt(
            "article",
            "",
            this.column.domElements.section_cards,
            {"class": "text-light bg-dark rounded p-4 mt-2 mb-2"}
        );
        // Ici, il faut maintenant créer les élément du dom qui constituent une carte
        // soit pour commencer l'affichage de la question en h3
        // l'affichage de la réponse en paragraphe. Ces deux derniers éléments 
        // sont les fils direct de l'élément du dom "article"
        
        const question = this.createAddDomElt(
            "h4",
            this.question,
            article
        );
        const answer = this.createAddDomElt(
            "p",
            this.answer,
            article
        );
        // je cache la réponse par défaut
        answer.hidden = true;

        
        // création du formulaire
        const form_edit = this.createAddDomElt(
            "form",
            "",
            article
        );
        const label_question = this.createAddDomElt(
            "label",
            "Question",
            form_edit
        );
        const input_question = this.createAddDomElt(
            "input",
            "",
            form_edit,
            {"type": "text", "value": this.question, "class": "form-control", "style": "margin: 6px 0"}
        );
        const label_answer = this.createAddDomElt(
            "label",
            "Réponse",
            form_edit
        );
        const input_answer = this.createAddDomElt(
            "input",
            "",
            form_edit,
            {"type": "text", "value": this.answer, "class": "form-control", "style":"margin: 6px 0"}
        );
        const button_submit_edit = this.createAddDomElt(
            "input",
            "",
            form_edit,
            {"type": "submit", "value": "Modifier", "class": "btn btn-primary mt-3 mb-3"}
        );
        // on cache le formulaire
        form_edit.hidden = true;

        // création des boutons
        const button_remove = this.createAddDomElt(
            "button",
            "Supprimer la carte",
            article,
            {"class": "btn btn-danger mr-2 mb-2 w-100"}
        );


        /**
         * Créer un bouton qui va afficher au click un formulaire
         * qui permettra de modifier la carte (la question et/ou la réponse )
         */
        const button_edit = this.createAddDomElt(
            "button",
            "Modifier la carte",
            article,
            {"class": "btn btn-warning mr-2 w-100"}
        );

        // Affichage spécifique pour une carte nouvellement ajoutée
        // Je m'assure que seuls le formulaire,le bouton Valider et le bouton Supprimer s'affichent
        if (this.added) {
            console.log("CARTE AJOUTEE");
            question.hidden = true;
            answer.hidden = true;
            form_edit.hidden = false;
            label_answer.hidden = true;
            label_question.hidden = true;
            button_submit_edit.value = "Valider"; // changement de la valeur du button_submit_edit
            button_submit_edit.hidden = false;
            button_edit.hidden = true;
        }

        
        return {
            "article": article,
            "question": question,
            "answer": answer,
            "button_remove": button_remove,
            "form_edit": form_edit,
            "input_answer": input_answer,
            "input_question": input_question,
            "button_edit": button_edit,
            "button_submit_edit": button_submit_edit // Ne pas oublier de retourner également ce bouton
        };
    }
}