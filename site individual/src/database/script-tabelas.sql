create database individual;
use individual;

 create table usuario(
ldUsuario int primary key auto_increment,
nome varchar (20),
sobrenome varchar (45),
email varchar (60),
senha varchar(10),
tktmedio float
);

select * from usuario;



select * from bolsa;
create table bolsa(
idBolsa int primary key auto_increment,
couro varchar(10),
tamanho varchar (7),
hardware varchar (15),
preco float,
valorFinal float,
fkUsuario int,
foreign key (fkUsuario) REFERENCES usuario(ldUsuario));