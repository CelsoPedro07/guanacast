-- Habilita geração de UUID (necessário em versões do PostgreSQL < 13)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Tabela de Usuários
CREATE TABLE usuario (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome_usuario    VARCHAR(100)  NOT NULL,
    email           VARCHAR(255)  NOT NULL UNIQUE,
    senha           VARCHAR(255)  NOT NULL,  -- guarde o HASH da senha, nunca o texto puro
    endereco        VARCHAR(255),
    previlegio       VARCHAR(10) DEFAULT "normal",
    photo_url       TEXT,
    data_cadastro   TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    data_nascimento DATE
);

-- Tabela de Mensagens
CREATE TABLE mensagem (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    emissor_id   UUID NOT NULL,
    receptor_id  UUID NOT NULL,
    texto        TEXT NOT NULL,
    data_envio   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_mensagem_emissor
        FOREIGN KEY (emissor_id) REFERENCES usuario(id) ON DELETE CASCADE,
    CONSTRAINT fk_mensagem_receptor
        FOREIGN KEY (receptor_id) REFERENCES usuario(id) ON DELETE CASCADE
);

-- Índices para acelerar consultas de conversas
CREATE INDEX idx_mensagem_emissor  ON mensagem(emissor_id);
CREATE INDEX idx_mensagem_receptor ON mensagem(receptor_id);
CREATE INDEX idx_mensagem_data     ON mensagem(data_envio);