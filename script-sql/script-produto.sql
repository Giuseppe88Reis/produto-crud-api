-- Database: Produto

-- DROP DATABASE IF EXISTS "Produto";

CREATE DATABASE "Produto"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE "Produto"
    IS 'Tabelas a serem criadas:
Produto;
Cliente;';

Create Table produto (
	id_produto SERIAL PRIMARY KEY NOT NULL,
	nome VARCHAR(40) NOT NULL,
	preco REAL NOT NULL,
	quant_est INTEGER NOT NULL,
	descricao VARCHAR(100)
)

Create Table cliente(
	id_cliente SERIAL PRIMARY KEY NOT NULL,
	nome VARCHAR(40) NOT NULL,
	cnpj VARCHAR(20) NOT NULL,
	endereco VARCHAR(80), 
	//email/USER
	//senha
)

select * from produto