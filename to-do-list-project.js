// escopo global
const lista_tarefas = [
  {
    id: 0,
    titulo: "Angular",
    data: "21/08",
    descricao: "Fazer projeto final",
    concluido: false,
  },
  {
    id: 2,
    titulo: "Angular",
    data: "21/08",
    descricao: "Fazer projeto individual",
    concluido: true,
  },
];

criaListaTarefas();

function criaListaTarefas() {
  const ulCards = document.querySelector("#to-do-list"); 
  ulCards.innerHTML = ""; // limpa todos os itens da to-do list atuais

  // cria novamente todos os itens que estão dentro de lista_tarefas
  lista_tarefas.forEach(({ id, data, titulo, descricao, concluido }) => {
    const li = document.createElement("li");
    li.classList.add("card");
    ulCards.appendChild(li);

    const div_data = document.createElement("div");
    div_data.classList.add("data");
    li.appendChild(div_data);

    const h2_data = document.createElement("h2");
    h2_data.innerText = data;
    div_data.appendChild(h2_data);

    const div_texto = document.createElement("div");
    div_texto.classList.add("texto");
    concluido ? div_texto.classList.add("concluido") : '';
    li.appendChild(div_texto);

    const h1 = document.createElement("h1");
    h1.innerText = titulo;
    div_texto.appendChild(h1);

    const p = document.createElement("p");
    p.innerText = descricao + ' - #' + id;
    div_texto.appendChild(p);

    const div_btn = document.createElement("div");
    div_btn.classList.add("botoes");
    li.appendChild(div_btn);

    const btn_check = document.createElement("button");
    btn_check.classList.add("btn-done");
    btn_check.addEventListener("click", () => concluirTarefa(id));
    div_btn.appendChild(btn_check);

    const img_check = document.createElement("img");
    img_check.src = "./assets/checked_icon.png";
    btn_check.appendChild(img_check);

    const btn_excluir = document.createElement("button");
    btn_excluir.classList.add("btn-delete");
    btn_excluir.addEventListener("click", () => excluirTarefa(id));
    div_btn.appendChild(btn_excluir);

    const img_excluir = document.createElement("img");
    img_excluir.src = "./assets/trash_icon.png";
    btn_excluir.appendChild(img_excluir);
  });
}

function concluirTarefa(id) {
  const index = lista_tarefas.findIndex(item => item.id === id);
  lista_tarefas[index].concluido = !lista_tarefas[index].concluido;
  criaListaTarefas();
}

function excluirTarefa(id) {
  // itemDom.parentNode.removeChild(itemDom);
  const index = lista_tarefas.findIndex(item => item.id === id);
  lista_tarefas.splice(index,1);
  criaListaTarefas();
}

function adicionarTarefa(titulo, descricao, data, id) {
  const item = {
    id,
    titulo,
    data,
    descricao,
    concluido: false,
  };
  lista_tarefas.push(item);
  criaListaTarefas();
}



const formulario = document.querySelector('#formulario');
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  // Dados formulário
  const tituloItem = document.querySelector('#input-titulo').value;
  const descricaoItem = document.querySelector('#input-descricao').value;
  let dataItem = document.querySelector('#input-data').value.split("-");
  dataItem = `${dataItem[2]}/${dataItem[1]}`
  const id = Math.max(...lista_tarefas.map(item => item.id)) + 1;

  adicionarTarefa(tituloItem, descricaoItem, dataItem, id);
  formulario.reset();
});
