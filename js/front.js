document.getElementById("func").onclick = ()=>{
}

let modalTitle;

// Obtém a referência para o elemento com o ID 'myModal' (provavelmente um modal)
const myModal = document.getElementById('myModal');

// Obtém a referência para o elemento com o ID 'myInput' (provavelmente um campo de input)
const myInput = document.getElementById('myInput');

// Adiciona um ouvinte de evento para o evento 'shown.bs.modal' no modal
myModal.addEventListener('shown.bs.modal', () => {
  // Quando o modal é mostrado (exibido na tela), o seguinte código é executado:

  // Define o foco para o elemento 'myInput'
  myInput.focus();
});


document.getElementById("btn-soliCli").onclick = ()=>{
  modalTitle = document.getElementById("exampleModalLabel");
  modalTitle.textContent = "Solicitações de clientes";
}