/*
Starter da Aula 4

Construa a logica do zero, seguindo o EXERCICIO.md.

Ordem sugerida:
1. Selecionar os elementos do DOM.
2. Criar a funcao validateTitle(title).
3. Criar o array items e o contador nextId.
4. Criar a funcao createStudyItem(item).
5. Tratar o submit do formulario.
6. Tratar o click da lista para remover itens com delegacao.

Meta da aula:
- formulario
- lista dinamica
- validacao simples
- uso de dataset
- delegacao de eventos
*/

const itens = [];
let nextId = 1;

const form = document.getElementById("study-form");
const input = document.getElementById("study-input");
const feedback = document.getElementById("feedback");
const list = document.getElementById("study-list");
const emptyState = document.getElementById("empty-state");

function setFeedback(message, type = ""){
    feedback.textContent = message;
    feedback.classList = "feedback";
    if (type){
        feedback.classList.add(`feedback--${type}`);
    }
}

function validateTitle(title){
    if (title.length === 0){
        return "Digite uma atividade.";
    }
    if (title.length < 3){
        return "Use pelo menos 3 caracteres.";
    }
    return "";
}

function createStudyItem(item){
    const li = document.createElement("li");

    li.className = "study-item";
    li.dataset.id = String(item.id);

    const title = document.createElement("p");
    title.className = "study-item__title";
    title.textContent = item.title;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "btn--danger";
    removeButton.textContent = "Remover";
    removeButton.dataset.action = "remove";

    li.append(title, removeButton);
    return li;
}


function renderList(){
    list.replaceChildren();

    if (itens.length === 0){
        emptyState.hidden = false;
        return;
    }

    emptyState.hidden = true;

    itens.forEach((item) => {
        list.appendChild(createStudyItem(item));
    });
}