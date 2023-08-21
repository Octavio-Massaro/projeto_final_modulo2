// escopo global
const lista_tarefas = [
  // {
  //   id: 0,
  //   titulo: "Angular",
  //   data: "21/08",
  //   descricao: "Fazer projeto final",
  //   concluido: false,
  // },
];

criaListaTarefas(); // cria as tarefas iniciais (a lista inicial estática acima)

function criaListaTarefas() {
  const ulCards = document.querySelector("#to-do-list");
  ulCards.innerHTML = ""; // limpa todos os itens da to-do list atuais

  const filterInput = document.querySelector("#search-bar");
  const listaFiltrada = filtrarListaTarefas(filterInput.value);

  // cria novamente todos os itens que estão dentro de lista_tarefas
  listaFiltrada.forEach(({ id, data, titulo, descricao, concluido }) => {
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
    concluido ? div_texto.classList.add("concluido") : "";
    li.appendChild(div_texto);

    const h1 = document.createElement("h1");
    h1.innerText = titulo;
    div_texto.appendChild(h1);

    const p = document.createElement("p");
    p.innerText = descricao;
    div_texto.appendChild(p);

    const div_btn = document.createElement("div");
    div_btn.classList.add("botoes");
    li.appendChild(div_btn);

    const btn_editar = document.createElement("button");
    btn_editar.classList.add("btn-edit");
    btn_editar.addEventListener("click", () => {
      const inputTitulo = document.createElement("input");
      inputTitulo.type = "text";
      inputTitulo.maxLength = "30";
      inputTitulo.value = titulo;
      inputTitulo.classList.add("inputEditTitulo");
      div_texto.replaceChild(inputTitulo, h1);

      inputTitulo.focus();

      const inputP = document.createElement("input");
      inputP.type = "text";
      inputP.maxLength = "100";
      inputP.value = descricao;
      inputP.classList.add("inputEditP");
      div_texto.replaceChild(inputP, p);

      window.addEventListener("keydown", (tecla) => {
        if (tecla.key === "Enter") {
          const novoTitulo = inputTitulo.value;
          const novoP = inputP.value;

          editarTarefa(novoTitulo, novoP, id);
        }
      });
    });
    div_btn.appendChild(btn_editar);

    const img_editar = document.createElement("img");
    img_editar.src = "./assets/pencil_icon.png";
    btn_editar.appendChild(img_editar);

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

function filtrarListaTarefas(texto) {
  return lista_tarefas.filter((item) =>
    item.titulo.includes(texto)
  );
}

function concluirTarefa(id) {
  const itemConcluido = lista_tarefas.find((item) => item.id === id);
  itemConcluido.concluido = !itemConcluido.concluido;
  criaListaTarefas();
}

function excluirTarefa(id) {
  const index = lista_tarefas.findIndex((item) => item.id === id);
  lista_tarefas.splice(index, 1);
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

function editarTarefa(titulo, descricao, id) {
  const itemEditado = lista_tarefas.find((item) => item.id === id);
  itemEditado.titulo = titulo;
  itemEditado.descricao = descricao;

  criaListaTarefas();
}



const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  // Dados formulário
  const tituloItem = document.querySelector("#input-titulo").value;
  const descricaoItem = document.querySelector("#input-descricao").value;
  let dataItem = document.querySelector("#input-data").value.split("-");
  dataItem = `${dataItem[2]}/${dataItem[1]}`;
  const id =
    lista_tarefas.length === 0
      ? 0
      : Math.max(...lista_tarefas.map((item) => item.id)) + 1;

  adicionarTarefa(tituloItem, descricaoItem, dataItem, id);
  formulario.reset();
});

const filterInput = document.querySelector("#search-bar");
filterInput.addEventListener("input", criaListaTarefas);
