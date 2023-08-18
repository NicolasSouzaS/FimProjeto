let selectFun;


function cadastrarClientes() {

  const body = document.body
  const modalCli = document.getElementById("exampleModal2")
  const estrutura = document.querySelector("#cad-func");
  estrutura.innerHTML = "";

 
          var divUser = document.createElement("div");
          divUser.setAttribute("class", "div_func");
          divUser.innerHTML =
          `
          <div class="teste">

          <div class="input-container">
            <input type="text" id="inputNomeC" required="">
            <label for="input" class="label">Nome Funcionario</label>
            <div class="underline"></div>
          </div>


          <div class="input-container">
          
          <select id="cargosC" class="form-select" aria-label="Default select example">
          <option selected>Cargo</option>
          <option value="Auxiliar">Auxiliar</option>
          <option value="Cuidador">Cuidador(a)</option>
          <option value="TécnicoEnfermagem">Técnico em Enfermagem</option>
          <option value="Enfermeiro">Enfermeiro(a)</option>
          </select>

          </div>

          </div>


          <div class="teste">
          <div class="input-container">
            <input type="text" id="inputSalarioC" required="">
            <label for="input" class="label">Salário</label>
            <div class="underline"></div>
          </div>

          <div class="input-container">
            <input type="text" id="inputTelC" required="">
            <label for="input" class="label">Telefone de contato</label>
            <div class="underline"></div>
          </div>
          </div>

          <div class="teste">
          <div class="input-container">
            <input type="text" id="inputEmailC" required="">
            <label for="input" class="label">E-mail de contato</label>
            <div class="underline"></div>
          </div>

          <div class="input-container">
            <input type="text" id="inputCPFC" required="">
            <label for="input" class="label">CPF</label>
            <div class="underline"></div>
          </div>
          
          </div>
          <div class="teste">
        
          <div class="input-container">
            <input type="text" id="inputEscolaridadeC" required="">
            <label for="input" class="label">Escolaridade</label>
            <div class="underline"></div>
          </div>
          </div>
          <div class="input-container" style="margin-left:297px;width:450px">
            <label style="margin-right:116px;" for="message">Experiencia Profissional</label>
            <textarea id="message" rows="4" cols="50" required></textarea>
          </div>

          
          <button id="btnCad" style="width:300px; margin:0 auto" class="button button-container">
           Cadastrar funcionário
          </button>
          
          
          
          `;
          // Adiciona a div do usuário à estrutura
          estrutura.appendChild(divUser);

          let btncad = document.getElementById("btnCad");

          // Vinculando as inputs a variaveis
          

          btncad.onclick = ()=> {

          let inputCargoC = document.getElementById("cargosC").value;
          let inputCPFC = document.getElementById("inputCPFC").value;
          let inputEmailC = document.getElementById("inputEmailC").value;
          let inputNomeC = document.getElementById("inputNomeC").value;
          let inputTelC = document.getElementById("inputTelC").value;
          let inputSalarioC = document.getElementById("inputSalarioC").value;
          let inputEscolaridadeC = document.getElementById("inputEscolaridadeC").value;
          let inputExperiC = document.getElementById("message").value;

            

                fetch("http://127.0.0.1:30021/insert/funcionarios",{
                    method:"POST",
                    headers:{
                        "accept":"application/json",
                        "content-type":"application/json"
                    },
                    body:JSON.stringify({
                        nome:inputNomeC,
                        email:inputEmailC,
                        telefone:inputTelC,
                        cargo:inputCargoC,
                        cpf:inputCPFC,
                        salario:inputSalarioC,
                        experiencia_profissional:inputExperiC,
                        escolaridade:inputEscolaridadeC
                    })
                }).then((response)=>response.json())
                    .then((result)=>{
                        if(result.output=="Inserção feita com sucésso"){
                            alert("Funcionario contratado com sucésso");
                            window.location.reload();
                        }
                        else{
                            alert("Não foi possível cadastrar. Tente novamente !");
                        }
                    })
                    .catch((error)=>console.error(`Erro ao cadastrar -> ${error}`));
                }
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
            window.location.reload();
        } else {
            alert("Erro ao tentar atualizar os dados")
        }
    })
    .catch(error => {
        console.error("Erro na requisição:", error);
    });
      

  }

  

  

  buttonDeletar.onclick = ()=>{

    let buttonConfirm = confirm("Desejá realmente deletar este funcionário ?");
    buttonConfirm
    console.log(buttonConfirm)

    if(buttonConfirm == true){
      fetch(`http://127.0.0.1:30021/delete/funcionarios/${id}`, {
        method:`DELETE`,
      })
      .then(response => {
        if (response.ok) {
         alert("Funcionario deletado com sucésso")
         window.location.reload();
        }
        else {
          alert("Erro ao tentar deletar o funcionario")
        }
      })
      .catch(error => {
        console.error("Erro ao deletar:", error);
      });
    }
    else{

    }
    }
  form.setAttribute("class","container");
  divWhite.appendChild(form);
  body.appendChild(divUserFunc);
  caixaBotoes.appendChild(buttonAtualizar);
  caixaBotoes.appendChild(buttonDeletar)
  body.appendChild(caixaBotoes);
  divUserFunc.appendChild(buttonFechar);
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
            <h2>Status: ${item.statusCliente}</h2>
            <h2>Responsavel: ${item.responsavel_cliente}</h2>
            <h2>Idade Paciente: ${item.idade_paciente}</h2>
            <a href="#" data-bs-dismiss="modal" onclick="editarCli('${item.idcliente}','${item.nomePaciente}','${item.telefone}','${item.statusCliente}','${item.idfuncionarios}')">
                 <i class="bi bi-pen"></i>
            </a>
            `;
            // Adiciona a div do usuário à estrutura
            estrutura.appendChild(divUser);
        })
    }).catch((error) => console.log(`Erro ao executar a API -> ${error}`));
};


function editarCli(id,nomePaciente,telefone,statusCliente){

  let buttonAtualizarCli = document.createElement("div");
  buttonAtualizarCli.setAttribute("class","divAtualizar")
  buttonAtualizarCli.innerHTML = `<div class="d-flex justify-content-center align-items-center" style=" height: ${buttonAtualizarCli.offsetHeight}px; height:20vh;">
  <button class="button">
    Atualizar Cliente
  </button>
  </div>
  `

  let buttonDeletarCli = document.createElement("div");
  buttonDeletarCli.setAttribute("class","divDeletar")
  buttonDeletarCli.innerHTML = `<div class="d-flex justify-content-center align-items-center" style=" height: ${buttonAtualizarCli.offsetHeight}px; height:20vh;">
  <button class="button">
    Deletar Cliente
  </button>
  </div>
  `

  let caixaBotoesCli = document.createElement("div");
  caixaBotoesCli.setAttribute("class","divBotoes")

  

  var divUserFuncCli = document.createElement("div");
  divUserFuncCli.setAttribute("class", "div_editFuncionarios");
  divUserFuncCli.innerHTML =
  `
  <div class="teste">

  <div class="input-container">
    <input type="text" style="color:white;" id="inputnomeP" value="${nomePaciente}" required="">
    <label style="color:white;" for="input" class="label">Nome Paciente</label>
    <div class="underline"></div>
  </div>

  </div>


  <div class="teste">
  <div class="input-container">

  <select id="cargosFunc" class="form-select" aria-label="Default select example">
  </select>
    <div class="underline"></div>
  </div>

  <div class="input-container">
    <input style="color:white;" type="text" id="inputTelefoneCli" value="${telefone}" required="">
    <label style="color:white;" for="input" class="label">Telefone</label>
    <div class="underline"></div>
  </div>
  </div>

  <div class="teste">
  <div class="input-container">
    <input style="color:white;" type="text" id="inputstatusCli" value="${statusCliente}" required="">
    <label style="color:white;" for="input" class="label">Status</label>
    <div class="underline"></div>
  </div>

  </div>
  
  
  
  `;


  // Referencia dos campos Inputs
  

  // Fazer uma referência ao body da página HTML
  const body = document.body;
  const divWhite = document.createElement("div");
  const form = document.createElement("form");
  
  

  // Aplicando atributos para os elementos
  divWhite.setAttribute("id","divWhite");
  
  let opt = `<option selected>Selecionar funcionário ao paciente</option>`
 
  fetch("http://127.0.0.1:30021/list/funcionarios")
    .then((response) => response.json())
    .then((result) => {
      selectFun = document.getElementById("cargosFunc");
        // Para cada item na lista de usuários, cria uma div de usuário e a preenche com informações
        result.data.map((item, index) => {
        
          
          opt += `<option value="${item.idfuncionarios}">${item.nome}</option>`;
         
         
        })
        selectFun.innerHTML = opt
      }
    )
    .catch((erro)=>{
      console.error(erro);
    })
  
  
  buttonAtualizarCli.onclick = ()=>{

        fetch(`http://127.0.0.1:30021/update/cliente/${id}`,{
          method:`PUT`,
          headers:{
              "accept":"application/json",
              "content-type":"application/json",
          },
          body:JSON.stringify({
             idfuncionarios:selectFun.value
          })
      })
      .then(response => {
        if (response.ok) {
            alert("Dados atualizados com sucésso")
            fetch(`http://127.0.0.1:30021/update/cliente/${id}`,{
          method:`PUT`,
          headers:{
              "accept":"application/json",
              "content-type":"application/json",
          },
          body:JSON.stringify({
             statusCliente:"Atendido"
          })
        })
        window.location.reload();
       } else {
            alert("Erro ao tentar atualizar os dados")
        }
    })
    .catch(error => {
        console.error("Erro na requisição:", error);
    });
      
    
  }
  

  buttonDeletarCli.onclick = ()=>{
    
   
    let buttonConfirmCli = confirm("Desejá realmente deletar este cliente ?");
    buttonConfirmCli
    console.log(buttonConfirmCli)

    if(buttonConfirmCli == true){
      fetch(`http://127.0.0.1:30021/delete/cliente/${id}`, {
        method:`DELETE`,
      })
      .then(response => {
        if (response.ok) {
         alert("Cliente deletado com sucésso")
         window.location.reload();
        }
        else {
          alert("Erro ao tentar deletar o cliente")
        }
      })
      .catch(error => {
        console.error("Erro ao deletar:", error);
      });
    }
    else{

    }
  }

  
  form.setAttribute("class","container");


  
  divWhite.appendChild(form);
  body.appendChild(divUserFuncCli);
  caixaBotoesCli.appendChild(buttonAtualizarCli);
  caixaBotoesCli.appendChild(buttonDeletarCli);
  body.appendChild(caixaBotoesCli); 
}

function cadastrarClientesForm (){

  const body = document.body;
  const btnEnviarForm = document.getElementById("btnEnviarForm");

  if( inputIdadeForm == "" ){
    return alert("Todos os campos devem ser preenchidos para requistar o contato conosco")
  }
  else{

   let inputNomePaciente = document.getElementById("inputPaciente").value;
   let inputIdadeForm = document.getElementById("inputIdadeForm").value;
   let inputAcompa = document.getElementById("inputAcompanhante").value;
   let inputEmailPaci = document.getElementById("inputEmailForm").value;
   let inputTelForm = document.getElementById("inpuTelForm").value;
   let inputDescr = document.getElementById("exampleFormControlTextarea1").value;

   console.log(inputNomePaciente)
   console.log(inputIdadeForm)
   console.log(inputAcompa)
   console.log(inputEmailPaci)
   console.log(inputTelForm)
   console.log(inputDescr)

    fetch("http://127.0.0.1:30021/insert/cliente",{
        method:"POST",
        headers:{
            "accept":"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
          nome:inputAcompa,
          email:inputEmailPaci,
          telefone:inputTelF,
          dataNascimento:inputIdadeForm,
          nomePaciente:inputAcompa,
          descricaoSaude:inputDescr
      })
    }).then((response)=>response.json())
        .then((result)=>{
            if(result.output=="Inserção feita com sucésso"){
                alert("Formulário enviado, Bem-vindo a Lumacare, entraremos em contato brevemente. Obrigado!");

            }
            else{
                alert("Não foi possível enviar. Tente novamente mais tarde !");
        
            }
        })
        .catch((error)=>console.error(`Erro ao cadastrar -> ${error}`));
    }
}