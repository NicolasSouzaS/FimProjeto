function carregarDadosFuncionarios() {


    // Obtém o elemento com o ID "list-func"
    const estrutura = document.getElementById("list-func")

    // Faz uma solicitação para buscar uma lista de usuários em um servidor local
    fetch("http://127.0.0.1:30021/list/funcionarios")
    .then((response) => response.json())
    .then((result) => {
        // Para cada item na lista de usuários, cria uma div de usuário e a preenche com informações
        result.data.map((item, index) => {
            let divUser = document.createElement("div");
            divUser.setAttribute("class", "div_user");
            divUser.innerHTML = `<img src="img/avatar.png">
            <h2>${item.nome}</h2>
            <h3>${item.email}</h3>
            <a href="#" onclick="editar('${item.idfuncionarios}','${item.nome}','${item.email}','${item.foto}')">
                <img src="img/botao-editar.png">
            </a>
            `;
            // Adiciona a div do usuário à estrutura
            estrutura.appendChild(divUser);
        })
    }).catch((error) => console.log(`Erro ao executar a API -> ${error}`));
};


function carregarDadosClientes() {


    // Obtém o elemento com o ID "list-cli"
    const estrutura = document.getElementById("list-cli")

    // Faz uma solicitação para buscar uma lista de usuários em um servidor local
    fetch("http://127.0.0.1:30021/list/clientes")
    .then((response) => response.json())
    .then((result) => {
        // Para cada item na lista de usuários, cria uma div de usuário e a preenche com informações
        result.data.map((item, index) => {
            let divUser = document.createElement("div");
            divUser.setAttribute("class", "div_user");
            divUser.innerHTML = `<img src="img/avatar.png">
            <h2>${item.nome}</h2>
            <h3>${item.email}</h3>
            <a href="#" onclick="editar('${item.id}','${item.nome}','${item.email}','${item.foto}')">
                <img src="img/botao-editar.png">
            </a>
            `;
            // Adiciona a div do usuário à estrutura
            estrutura.appendChild(divUser);
        })
    }).catch((error) => console.log(`Erro ao executar a API -> ${error}`));
};





function cadastrarClientes() {


    // Obtém o elemento com o ID "list-func"
    const estrutura = document.querySelector("#list-func");

    // Faz uma solicitação para buscar uma lista de usuários em um servidor local
    fetch("http://127.0.0.1:30021/test/list")
    .then((response) => response.json())
    .then((result) => {
        // Para cada item na lista de usuários, cria uma div de usuário e a preenche com informações
        result.data.map((item, index) => {
            let divUser = document.createElement("div");
            divUser.setAttribute("class", "div_user");
            divUser.innerHTML = `<img src="img/avatar.png">
            <h2>${item.nome}</h2>
            <h3>${item.email}</h3>
            <a href="#" onclick="editar('${item.idcliente}','${item.nome}','${item.email}','${item.foto}')">
                <img src="img/botao-editar.png">
            </a>
            `;
            // Adiciona a div do usuário à estrutura
            estrutura.appendChild(divUser);
        })
    }).catch((error) => console.log(`Erro ao executar a API -> ${error}`));
};
