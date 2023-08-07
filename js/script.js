
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
            <a href="#" onclick="editar();">
            <i onclick="editar();" class="bi bi-pen"></i>
            </a>
            `;
            // Adiciona a div do usuário à estrutura
            estrutura.appendChild(divUser);
            
            function editar(){
                divUser.style.display = "none";
            }

        })
    }).catch((error) => console.log(`Erro ao executar a API -> ${error}`));
};




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





function cadastrarClientes() {

    const estrutura = document.querySelector("#cad-func");
    estrutura.innerHTML = "";
   
            let divUser = document.createElement("div");
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
              <input type="text" id="input" required="">
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
