-- Active: 1687177411690@@127.0.0.1@6556
CREATE DATABASE	Lumacaredb2;

USE Lumacaredb2;

create table cliente(
	idcliente int auto_increment primary key, 
	nome varchar (200) not null,
	nomePaciente VARCHAR(50) not null,
	email varchar(100) not null,
	telefone varchar(15) not null,
	statusCliente enum("Pendente", "Atendido") not null DEFAULT "Pendente",
	dataNascimento VARCHAR (20),
	descricaoSaude TEXT,
	idfuncionarios int
);
create table endereco_cliente(
	idendereco int auto_increment primary key,
	tipo enum("Rua","Avenida","Alameda","Travessa","Viela","Praça","Estrada"),
	logradouro varchar(100) not null,
	numero int(15),
	complemento varchar(50),
	cep varchar(12)
);
create table endereco_funcionarios(
	idendereco int auto_increment primary key,
	tipo enum("Rua","Avenida","Alameda","Travessa","Viela","Praça","Estrada") not null,
	logradouro varchar(100),
	numero int(15),
	complemento varchar(50),
	cep varchar(12)
);
create table funcionarios(
	idfuncionarios int auto_increment primary key,
	nome varchar (200) not null,
	cargo enum("Auxiliar","Enfermeiro","TécnicoEnfermagem","Cuidador"),
    salario varchar(100) not null,
	telefone varchar(15) not null,
	email varchar(100) not null,
	cpf varchar(15) not null unique,
	experiencia_profissional VARCHAR(100),
	escolaridade varchar (50)
);

CREATE TABLE usuarios(
	idusuario int AUTO_INCREMENT PRIMARY key,
	usuario VARCHAR(50),
	senha VARCHAR(255),
	idfuncionario int
);
	DEFAULT CHARACTER SET = 'utf8mb4';