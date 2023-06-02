//importação do módulo gerenciador de ambiente
require("dotenv").config();

//importar o express
const express = require("express");

//importar o módulo do mysql
const mysql = require("mysql2");

//importar o módulo do bcrypt para criptgrafia de senha
const bcrypt = require("bcrypt");

//importar o módulo do jsonwebtoken para criptografia de sessão
const jwt = require("jsonwebtoken");


//instância do express representada por app
const app = express();

//Ativar a manipulação de dados em JSON
app.use(express.json());


/* -------------- Banco de dados ---------------------
configurar a conexão com o banco de dados mysql passando
 - host(servidor de banco de dados)
 - nome de usuario
 - nome do banco
 - senha de acesso ao banco
 - porta de conexão
*/

const con = mysql.createConnection({
    host: process.env.HOST_DB,
    database: process.env.NAME_DB,
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    port: process.env.PORT_DB
});
/*
Para ativar a conexão com o banco de dados, iremos 
usar o comando connect. Estes comand possui um 
callback que verifica se houve um erro na conexão
com o banco de dados
*/
con.connect((erro) => {
    if (erro) {
        return console.error(`Erro durante a conexao -> ${erro}`);
    }
    console.log(`Conexao estabelecida ${con.threadId}`);
});



//primeira rota para listar os usuarios
app.get("/users/list", (req, res) => {

    //Vamos executar uma consulta sql para selecionar todos os usuários
    con.query("SELECT * FROM usuario", (error, result) => {
        if (!error)
            return res.status(200).send({ output: "OK", data: result })
        else return res.status(500).send({ output: `Erro interno ao processar a solicitação`, erro: error });
    })

});


//Criação de uma nova rota para efetuar o cadastro dos usuários
app.post("/users/insert", (req, res) => {
    //pegando a senha que foi enviada pelo usuário(Front)
    let sh = req.body.senha;

    //realizar a criptografia da senha e depois cadastrar em banco
    bcrypt.hash(sh, 10, (error, result) => {

        if (!error) {
            //devolver a senha, porém, agora criptografada
            req.body.senha = result;
            con.query("INSERT INTO usuario SET ?", [req.body], (error, result) => {
                if (!error)
                    return res.status(201).send({ output: `Inserted`, data: result });
                else return res.status(500).send({ output: `Erro ao tentar cadastrar`, erro: error });
            });
        }
        else return res.status(500).send({ output: `Erro ao processar a senha`,erro:error});
    });
});

//Vamos criar uma rota para atualizar os dados
app.put("/users/update/:id", (req, res) => {
    //pegando a senha que foi enviada pelo usuário(Front)
    let sh = req.body.senha;

    //realizar a criptografia da senha e depois cadastrar em banco
    bcrypt.hash(sh, 10, (error, result) => {

        if (!error) {
            //devolver a senha, porém, agora criptografada
            req.body.senha = result;
            con.query("UPDATE usuario SET ? WHERE idusuario=?", [req.body,req.params.id], (error, result) => {
                if (!error)
                    return res.status(202).send({ output: `Updated`, data: result });
                else return res.status(500).send({ output: `Erro ao tentar atualizar`, erro: error });
            });
        }
        else return res.status(500).send({ output: `Erro ao processar a senha`,erro:error});
    });
});


//rota para realizar o login
app.post("/users/login",(req,res)=>{

    con.query("SELECT * FROM usuario WHERE nomeusuario=?",[req.body.nomeusuario],(error,result)=>{
        if(!error){
            bcrypt.compare(req.body.senha , result[0].senha,(err, igual)=>{
                if(igual){
                    const token = criarToken(result[0].idusuario, result[0].nomeusuario,result[0].email);

                    return res.status(200).send({ouput:"Authenticated",token:token});
                }
                else{
                    return res.status(400).send({output:"Usuário ou Senha incorreto 1"});
                }
            })
        }
        else if(!result){
            return res.status(400).send({output:"Usuário ou Senha incorreto 2"});
        }
        else{
            return res.status(500).send({output:`Erro ao tentar executar o login`,erro:error})
        }
    });
});



//Criação do token para um usuario
function criarToken(id, usuario, email){
    return jwt.sign({idusuario:id,nomeusuario:usuario,email:email},
        process.env.JWT_KEY,
        {expiresIn:process.env.JWT_EXPIRES,algorithm:"HS512"})
}




//vamos definir a porta de comunicação do servidor
app.listen(process.env.PORT, () => console.log(`Server online at: ${process.env.HOST}:${process.env.PORT}`));