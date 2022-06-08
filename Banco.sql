use crud;

create table clientes(
id int primary key not null auto_increment,
nome VARCHAR(20),
idade int(3),
estado varchar(2)
);

create table pedido(
id_produto int primary key not null auto_increment,
nome_produto varchar(20),
preco_produto float(4,2),
id_cliente int,
foreign key(id_cliente) references clientes(id)
);