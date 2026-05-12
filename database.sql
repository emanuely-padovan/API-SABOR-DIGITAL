CREATE DATABASE IF NOT EXISTS sabordigital;
-- drop database sabordigital;
USE sabordigital;

CREATE TABLE IF NOT EXISTS produto (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    categoria VARCHAR(50) DEFAULT NULL,
    disponibilidade BOOLEAN DEFAULT TRUE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS pedidos (
	id INT AUTO_INCREMENT PRIMARY KEY,
    cliente VARCHAR(100) DEFAULT NULL,
    status_pedido ENUM('pendente','preparo','pronto','entregue') DEFAULT 'pendente',
    total DECIMAL(10, 2) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- População inicial (Opcional)
INSERT INTO produto (nome, descricao, preco, categoria, disponibilidade) VALUES 
('Espaguete à Bolonhesa', 'Massa com molho de tomate e carne moída', 35.50, 'Massa', true),
('Lasanha de Frango', 'Lasanha com frango desfiado e queijo', 42.00, 'Massa', true),
('Pizza Margherita', 'Pizza de mussarela, tomate e manjericão', 50.00, 'Pizza', true),
('Suco de Laranja', 'Suco natural 500ml', 12.00, 'Bebida', true);