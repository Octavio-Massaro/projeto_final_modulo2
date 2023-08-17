// var id = 0;

let lista_tarefas = [
  {
    id: 0,
    titulo: "tes1",
    data:"teste1",
    descricao:"teste1",
    status:"teste11",
  },

  {
    id: 2,
    titulo: "",
    data:"",
    descricao:"",
    status:"",
  },
];

// var novo_item = {
//         id,
//         titulo: "",
//         data:"",
//         descricao:"",
//         status:"",
//       }


// function adicionar(entrada,lista_tarefas) {
//     lista_tarefas.push({...entrada,id});
//     id++;
// }

// function remover() {
    
// }

// let parar = false;
// while(true){
//     if(parar){
//         break;
//     }

// adicionar(novo_item,lista_tarefas);
// console.log(lista_tarefas);
// adicionar(novo_item,lista_tarefas);
// console.log(lista_tarefas);
// }

// Variaveis
const adiciona = document.querySelector("#input-new-task");

const lista_cards = document.querySelector("#to-do-list");

function ler() {
    const tituloItem = document.querySelector('#input-titulo').value;

    const li = document.createElement("li");
    lista_cards.appendChild(li);
    li.classList.add("card");

    const div_data = document.createElement("div");
    div_data.classList.add("data");
    li.appendChild(div_data);

    const h2_data = document.createElement("h2");
    h2_data.innerText = "10/08"; 
    div_data.appendChild(h2_data);

    const div_texto = document.createElement("div");
    div_texto.classList.add("texto");
    li.appendChild(div_texto);

    const h1 = document.createElement("h1");
    h1.innerText = "teste";
    div_texto.appendChild(h1);

    const p = document.createElement("p");
    p.innerText = "teste";
    div_texto.appendChild(p);

    const div_btn = document.createElement("div");
    div_btn.classList.add("botoes");
    li.appendChild(div_btn);
    
    const btn_check = document.createElement("button");
    btn_check.classList.add("btn-done");
    div_btn.appendChild(btn_check);

    const img_check = document.createElement("img");
    img_check.src = "./assets/checked_icon.png"
    btn_check.appendChild(img_check);

    const btn_excluir = document.createElement("button");
    btn_excluir.classList.add("btn-delete");
    div_btn.appendChild(btn_excluir);

    const img_excluir = document.createElement("img");
    img_excluir.src = "./assets/trash_icon.png"
    btn_excluir.appendChild(img_excluir);

}

const formulario = document.querySelector('#formulario');
formulario.addEventListener("submit",(event) => {
    event.preventDefault();
    ler();
})
