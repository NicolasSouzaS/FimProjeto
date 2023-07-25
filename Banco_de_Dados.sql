CREATE DATABASE Luumacaredb;

USE Luumacaredb;

create table cliente(
	idcliente int auto_increment primary key, 
	nome varchar (200) not null,
	email varchar(100) not null,
	telefone varchar(15) not null,
	status enum("Pendente", "atendido") not null,
	nivel_complexidade enum('Alta', 'Médio', 'Baixo')not null,
	responsavel_cliente varchar(50) not null,
	idade_paciente int (20) not null
);
create table endereco_cliente(
	idendereco int auto_increment primary key,
	tipo enum("Rua","Avenida","Alameda","Travessa","Viela","Praça","Estrada") not null,
	logradouro varchar(100) not null,
	numero int(15) not null,
	complemento varchar(50) not null,
	cep varchar(12) not null
);
create table endereco_funcionarios(
	idendereco int auto_increment primary key,
	tipo enum("Rua","Avenida","Alameda","Travessa","Viela","Praça","Estrada") not null,
	logradouro varchar(100) not null,
	numero int(15) not null,
	complemento varchar(50) not null,
	cep varchar(12) not null
);
create table funcionarios(
	idfuncionarios int auto_increment primary key,
	nome varchar (200) not null,
	cargo varchar(66) not null,
    salario varchar(100) not null,
	telefone varchar(15) not null,
	email varchar(100) not null unique,
	cpf varchar(15) not null unique,
	experiencia_profissional enum("Cuidador de idosos","Tecnico de Enfermagem")not null,
	escolaridade varchar (50) not null,
	id_funcionarios int not null
);