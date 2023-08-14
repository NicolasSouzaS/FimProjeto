const { response } = require("express");

function cadastrarClientes() {

  const estrutura = document.querySelector("#cad-func");
  estrutura.innerHTML = "";
 
          var divUser = document.createElement("div");
          divUser.setAttribute("class", "div_func");
          divUser.innerHTML =
          `
          <div class="teste">

          <div class="input-container">
            <input type="text" id="input" required="">
            <label for="input" class="label">Nome Funcionario</label>
            <div class="underline"></div>
          </div>
          <div class="input-container">
            <input type="text" id="input" required="">
            <label for="input" class="label">Cargo que irá ocupar</label>
            <div class="underline"></div>
          </div>

          </div>


          <div class="teste">
          <div class="input-container">
            <input type="text" id="input" required="">
            <label for="input" class="label">Salário</label>
            <div class="underline"></div>
          </div>

          <div class="input-container">
            <input type="text" id="input" required="">
            <label for="input" class="label">Telefone de contato</label>
            <div class="underline"></div>
          </div>
          </div>

          <div class="teste">
          <div class="input-container">
            <input type="text" id="" required="">
            <label for="input" class="label">E-mail de contato</label>
            <div class="underline"></div>
          </div>

          <div class="input-container">
            <input type="text" id="input" required="">
            <label for="input" class="label">CPF</label>
            <div class="underline"></div>
          </div>
          </div>
          <div class="input-container">
            <input type="text" id="input" required="">
            <label for="input" class="label">Experiencia Profissional</label>
            <div class="underline"></div>
          </div>

          
          `;
          // Adiciona a div do usuário à estrutura
          estrutura.appendChild(divUser);
};




function carregarDadosFuncionarios() {

    

    // Obtém o elemento com o ID "list-func"
    const estrutura = document.getElementById("list-func")
    estrutura.innerHTML = "";
    
    // Faz uma solicitação para buscar uma lista de usuários em um servidor local
    fetch("http://127.0.0.1:30021/list/funcionarios")
    .then((response) => response.json())
    .then((result) => {
        // Para cada item na lista de usuários, cria uma div de usuário e a preenche com informações
        result.data.map((item, index) => {
            let divUser = document.createElement("div");
            divUser.setAttribute("class", "div_user");
            divUser.innerHTML = `<img style="width:40px; height:40px;" src="./imgs/log.png"/>

            <h2>Nome: ${item.nome}</h2>
            <h2>Cargo: ${item.cargo}</h2>
            <h2>Salario: ${item.salario}</h2>
            <h2>Email: ${item.email}</h2>
            <a href="#" data-bs-dismiss="modal" onclick="editarFunc('${item.idfuncionarios}','${item.email}','${item.cargo}','${item.salario}','${item.telefone}');">
            <i class="bi bi-pen"></i>
            </a>
            `;
            // Adiciona a div do usuário à estrutura
            estrutura.appendChild(divUser);
          
        })
    }).catch((error) => console.log(`Erro ao executar a API -> ${error}`));
};

function editarFunc(id,email,cargo,salario,telefone){

  

  let buttonAtualizar = document.createElement("div");
  buttonAtualizar.setAttribute("class","divAtualizar")
  buttonAtualizar.innerHTML = `<div class="d-flex justify-content-center align-items-center" style=" height: ${buttonAtualizar.offsetHeight}px; height:20vh;">
  <button class="button">
    Atualizar Funcionário
  </button>
  </div>
  `

  let buttonDeletar = document.createElement("div");
  buttonDeletar.setAttribute("class","divDeletar")
  buttonDeletar.innerHTML = `<div class="d-flex justify-content-center align-items-center" style=" height: ${buttonAtualizar.offsetHeight}px; height:20vh;">
  <button class="button">
    Deletar Funcionário
  </button>
  </div>
  `

  let caixaBotoes = document.createElement("div");
  caixaBotoes.setAttribute("class","divBotoes")

  

  var divUserFunc = document.createElement("div");
  divUserFunc.setAttribute("class", "div_editFuncionarios");
  divUserFunc.innerHTML =
  `
 
  <div class="teste">

  <ion-icon style="color:white; cursor:pointer; font-size:30pt; margin-left: 25px;margin-top:15px;" name="close-outline" id="fecharForm"></ion-icon>

  <div class="input-container">
    <input type="text" style="color:white;" id="inputCargo" value="${cargo}" required="">
    <label style="color:white;" for="input" class="label">Cargo ocupado</label>
    <div class="underline"></div>
  </div>

  </div>


  <div class="teste">
  <div class="input-container">
    <input style="color:white;" type="text" id="inputSalario" value="${salario}" required="">
    <label style="color:white;" for="input" class="label">Salário</label>
    <div class="underline"></div>
  </div>

  <div class="input-container">
    <input style="color:white;" type="text" id="inputTelefone" value="${telefone}" required="">
    <label style="color:white;" for="input" class="label">Telefone de contato</label>
    <div class="underline"></div>
  </div>
  </div>

  <div class="teste">
  <div class="input-container">
    <input style="color:white;" type="text" id="inputEmail" value="${email}" required="">
    <label style="color:white;" for="input" class="label">E-mail de contato</label>
    <div class="underline"></div>
  </div>

  </div>
  
  
  
  `;

  const botaoFechar = document.querySelector("#fecharForm");

  // Referencia dos campos Inputs
  

  // Fazer uma referência ao body da página HTML
  const body = document.body;
  const divWhite = document.createElement("div");
  const form = document.createElement("form");
  const inputId = document.createElement("input");
  const inputUser = document.createElement("input");
  const inputCargo = document.createElement("input");
  const inputSalario = document.createElement("input");
  const inputEmail = document.createElement("input");
  const inputSub = document.createElement("input");
  

  // Aplicando atributos para os elementos
  divWhite.setAttribute("id","divWhite");
  
  
  buttonAtualizar.onclick = ()=>{

    emailFunc = document.getElementById("inputEmail").value
    telFunc = document.getElementById("inputTelefone").value
    salarioFunc = document.getElementById("inputSalario").value
    cargoFunc = document.getElementById("inputCargo").value

    

      
        fetch(`http://127.0.0.1:30021/update/funcionarios/${id}`,{
          method:`PUT`,
          headers:{
              "accept":"application/json",
              "content-type":"application/json",
          },
          body:JSON.stringify({
              email:emailFunc,
              telefone:telFunc,
              salario:salarioFunc,
              cargo:cargoFunc
          })
      })
      .then(response => {
        if (response.ok) {
            alert("Dados atualizados com sucésso")
            body.removeChild(divUserFunc)
            body.removeChild(caixaBotoes)
        } else {
            alert("Erro ao tentar atualizar os dados")
        }
    })
    .catch(error => {
        console.error("Erro na requisição:", error);
    });
      

  }

  buttonDeletar.onclick = ()=>{
    fetch(`http://127.0.0.1:30021/delete/funcionarios/${id}`, {
      method:`DELETE`,

    })
    .then(response => {
      if (response.ok) {
       alert("Funcionario deletado com sucésso")
        body.removeChild(divUserFunc)
        body.removeChild(caixaBotoes)
      }
      else {
        alert("Erro ao tentar deletar o funcionario")
        body.removeChild(divUserFunc)
        body.removeChild(caixaBotoes)
      }
    })
    .catch(error => {
      console.error("Erro ao deletar:", error);
    });
  }

  
  
  form.setAttribute("class","container");
  
  inputId.setAttribute("id","inputID");
  inputId.setAttribute("class","input-container");
  inputId.setAttribute("class", "label");
  inputId.setAttribute("class","underline")

  form.appendChild(inputId);
  form.appendChild(inputUser);
  form.appendChild(inputEmail);
  form.appendChild(inputCargo);
  form.appendChild(inputSalario);
  form.appendChild(inputSub);
  divWhite.appendChild(form);
  body.appendChild(divUserFunc);
  caixaBotoes.appendChild(buttonAtualizar);
  caixaBotoes.appendChild(buttonDeletar)
  body.appendChild(caixaBotoes);
  
}


function carregarDadosClientes() {


    // Obtém o elemento com o ID "list-cli"
    const estrutura = document.getElementById("list-cli")
    estrutura.innerHTML = "";
    // Faz uma solicitação para buscar uma lista de usuários em um servidor local
    fetch("http://127.0.0.1:30021/list/clientes")
    .then((response) => response.json())
    .then((result) => {
        // Para cada item na lista de usuários, cria uma div de usuário e a preenche com informações
        result.data.map((item, index) => {
            let divUser = document.createElement("div");
            divUser.setAttribute("class", "div_user");
            divUser.innerHTML = `<i class="bi bi-person-circle"></i>
            <h2>Nome: ${item.nome}</h2>
            <h2>Telefone: ${item.telefone}</h2>
            <h2>Status: ${item.status}</h2>
            <h2>Responsavel: ${item.responsavel_cliente}</h2>
            <h2>Idade Paciente: ${item.idade_paciente}</h2>
            <a href="#" onclick="editarCli('${item.id}','${item.nome}','${item.email}','${item.foto}')">
                 <i class="bi bi-pen"></i>
            </a>
            `;
            // Adiciona a div do usuário à estrutura
            estrutura.appendChild(divUser);
        })
    }).catch((error) => console.log(`Erro ao executar a API -> ${error}`));
};


function editarCli(id,email,cargo,salario,telefone){

  

  let buttonAtualizar = document.createElement("div");
  buttonAtualizar.setAttribute("class","divAtualizar")
  buttonAtualizar.innerHTML = `<div class="d-flex justify-content-center align-items-center" style=" height: ${buttonAtualizar.offsetHeight}px; height:20vh;">
  <button class="button">
    Atualizar Cliente
  </button>
  </div>
  `

  let buttonDeletar = document.createElement("div");
  buttonDeletar.setAttribute("class","divDeletar")
  buttonDeletar.innerHTML = `<div class="d-flex justify-content-center align-items-center" style=" height: ${buttonAtualizar.offsetHeight}px; height:20vh;">
  <button class="button">
    Deletar Funcionário
  </button>
  </div>
  `

  let caixaBotoes = document.createElement("div");
  caixaBotoes.setAttribute("class","divBotoes")

  

  var divUserFunc = document.createElement("div");
  divUserFunc.setAttribute("class", "div_editFuncionarios");
  divUserFunc.innerHTML =
  `
  <div class="teste">

  <div class="input-container">
    <input type="text" style="color:white;" id="inputCargo" value="${cargo}" required="">
    <label style="color:white;" for="input" class="label">Cargo ocupado</label>
    <div class="underline"></div>
  </div>

  </div>


  <div class="teste">
  <div class="input-container">
    <input style="color:white;" type="text" id="inputSalario" value="${salario}" required="">
    <label style="color:white;" for="input" class="label">Salário</label>
    <div class="underline"></div>
  </div>

  <div class="input-container">
    <input style="color:white;" type="text" id="inputTelefone" value="${telefone}" required="">
    <label style="color:white;" for="input" class="label">Telefone de contato</label>
    <div class="underline"></div>
  </div>
  </div>

  <div class="teste">
  <div class="input-container">
    <input style="color:white;" type="text" id="inputEmail" value="${email}" required="">
    <label style="color:white;" for="input" class="label">E-mail de contato</label>
    <div class="underline"></div>
  </div>

  </div>
  
  
  
  `;


  // Referencia dos campos Inputs
  

  // Fazer uma referência ao body da página HTML
  const body = document.body;
  const divWhite = document.createElement("div");
  const form = document.createElement("form");
  const inputId = document.createElement("input");
  const inputUser = document.createElement("input");
  const inputCargo = document.createElement("input");
  const inputSalario = document.createElement("input");
  const inputEmail = document.createElement("input");
  const inputSub = document.createElement("input");
  

  // Aplicando atributos para os elementos
  divWhite.setAttribute("id","divWhite");
  
  

  buttonAtualizar.onclick = ()=>{

    emailFunc = document.getElementById("inputEmail").value
    telFunc = document.getElementById("inputTelefone").value
    salarioFunc = document.getElementById("inputSalario").value
    cargoFunc = document.getElementById("inputCargo").value

    

      
        fetch(`http://127.0.0.1:30021/update/funcionarios/${id}`,{
          method:`PUT`,
          headers:{
              "accept":"application/json",
              "content-type":"application/json",
          },
          body:JSON.stringify({
              email:emailFunc,
              telefone:telFunc,
              salario:salarioFunc,
              cargo:cargoFunc
          })
      })
      .then(response => {
        if (response.ok) {
            alert("Dados atualizados com sucésso")
            body.removeChild(divUserFunc)
            body.removeChild(caixaBotoes)
        } else {
            alert("Erro ao tentar atualizar os dados")
        }
    })
    .catch(error => {
        console.error("Erro na requisição:", error);
    });
      

  }

  buttonDeletar.onclick = ()=>{
    fetch(`http://127.0.0.1:30021/delete/funcionarios/${id}`, {
      method:`DELETE`,

    })
    .then(response => {
      if (response.ok) {
       alert("Funcionario deletado com sucésso")
        body.removeChild(divUserFunc)
        body.removeChild(caixaBotoes)
      }
      else {
        alert("Erro ao tentar deletar o funcionario")
        body.removeChild(divUserFunc)
        body.removeChild(caixaBotoes)
      }
    })
    .catch(error => {
      console.error("Erro ao deletar:", error);
    });
  }

  
  form.setAttribute("class","container");
  
  inputId.setAttribute("id","inputID");
  inputId.setAttribute("class","input-container");
  inputId.setAttribute("class", "label");
  inputId.setAttribute("class","underline")

  form.appendChild(inputId);
  form.appendChild(inputUser);
  form.appendChild(inputEmail);
  form.appendChild(inputCargo);
  form.appendChild(inputSalario);
  form.appendChild(inputSub);
  divWhite.appendChild(form);
  body.appendChild(divUserFunc);
  caixaBotoes.appendChild(buttonAtualizar);
  caixaBotoes.appendChild(buttonDeletar)
  body.appendChild(caixaBotoes);
  
}