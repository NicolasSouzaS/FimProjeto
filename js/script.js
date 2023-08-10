let autenticado;
let token;
let key;  
let

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
            divUser.innerHTML = `<i class="bi bi-person-circle"></i>
            <h2>${item.nome}</h2>
            <h2>${item.cargo}</h2>
            <h2>${item.salario}</h2>
            <h2>${item.email}</h2>
            <a href="#" data-bs-dismiss="modal" onclick="editar('${item.idfuncionarios}','${item.nome}','${item.email}','${item.cargo}','${item.salario}');">
            <i class="bi bi-pen"></i>
            </a>
            `;
            // Adiciona a div do usuário à estrutura
            estrutura.appendChild(divUser);
          
        })
    }).catch((error) => console.log(`Erro ao executar a API -> ${error}`));
};

function editar(id,nome,email,cargo,salario){

  let idFunc = id
  let cargoFunc = cargo



  let buttonAtualizar = document.createElement("div");
  buttonAtualizar.setAttribute("id", "buttonAtualizar");
  buttonAtualizar.innerHTML = "<button>Clique</button>"

  var divUserFunc = document.createElement("div");
  divUserFunc.setAttribute("class", "div_editFuncionarios");
  divUserFunc.innerHTML =
  `
  <div class="teste">

  <div class="input-container">
    <input type="text" id="inputCargo" value="${cargo}" required="">
    <label for="input" class="label">Cargo ocupado</label>
    <div class="underline"></div>
  </div>

  </div>


  <div class="teste">
  <div class="input-container">
    <input type="text" id="inputSalario" required="">
    <label for="input" class="label">Salário</label>
    <div class="underline"></div>
  </div>

  <div class="input-container">
    <input type="text" id="inputTelefone" required="">
    <label for="input" class="label">Telefone de contato</label>
    <div class="underline"></div>
  </div>
  </div>

  <div class="teste">
  <div class="input-container">
    <input type="text" id="inputEmail" required="">
    <label for="input" class="label">E-mail de contato</label>
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
  // Atributo para não enviar o formulário. O envio será feito
  // via JavaScript.
  form.setAttribute("onsubmit","return false;")

  // Aplicando atributos para o Id, os atributos são:
  // type, placeholder, disabled
  inputId.setAttribute("type","text");
  inputId.setAttribute("placeholder",`Id ${id}`);
  inputId.setAttribute("disabled","true");
  inputId.style.color = "white"

  // Aplicando atributos ao user, os atributos são: type, placeholder
  // disabled
  inputUser.setAttribute("type","text");
  inputUser.setAttribute("placeholder",`Nome: ${nome}`);
  inputUser.setAttribute("disabled","true");
  inputUser.setAttribute("class","input-container")
  inputUser.setAttribute("id","input")
  inputUser.style.color = "white"


  // Atributos para email
  inputEmail.setAttribute("type","email");
  inputEmail.setAttribute("placeholder",`Email: ${email}`);
  inputEmail.setAttribute("class","input-container")
  inputEmail.setAttribute("id","input")
  inputEmail.style.color = "white"


  inputCargo.setAttribute("type","text");
  inputCargo.setAttribute("placeholder",`Cargo: ${cargo}`);
  inputCargo.setAttribute("class","input-container")
  inputCargo.setAttribute("id","input")
  inputCargo.style.color = "white"


  inputSalario.setAttribute("type","text");
  inputSalario.setAttribute("placeholder",`Salario: ${salario}`);
  inputSalario.setAttribute("class","input-container")
  inputSalario.setAttribute("id","input")
  inputSalario.style.color = "white"


  inputSub.setAttribute("type","submit");
  inputSub.setAttribute("value","Atualizar");
  
 
  

  buttonAtualizar.onclick = ()=>{

    emailFunc = document.getElementById("inputEmail").value
    telFunc = document.getElementById("inputTelefone").value
    salarioFunc = document.getElementById("inputSalario").value
    cargoFunc = document.getElementById("inputCargo").value

      
        fetch(`http://127.0.0.1:30021/update/funcionarios/${idFunc}`,{
          method:`PUT`,
          headers:{
              "accept":"application/json",
              "content-type":"application/json",
          },
          body:JSON.stringify({
              email:emailFunc.value,
              telefone:telFunc.value,
              salario:salarioFunc.value,
              cargo:cargoFunc.value
          })
      })
      .then(response => {
        if (response.ok) {
            console.log("Dados atualizados com sucesso!");
        } else {
            console.error("Erro ao atualizar os dados:", response.statusText);
        }
    })
    .catch(error => {
        console.error("Erro na requisição:", error);
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
  body.appendChild(buttonAtualizar);
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
            <h2>${item.nome}</h2>
            <h2>${item.telefone}</h2>
            <h2>${item.stats}</h2>
            <h2>${item.responsavel_cliente}</h2>
            <h2>${item.idade_paciente}</h2>
            <a href="#" onclick="editar('${item.id}','${item.nome}','${item.email}','${item.foto}')">
                 <i class="bi bi-pen"></i>
            </a>
            `;
            // Adiciona a div do usuário à estrutura
            estrutura.appendChild(divUser);
        })
    }).catch((error) => console.log(`Erro ao executar a API -> ${error}`));
};




