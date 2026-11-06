import connectToPostgres from "../../config/database.js";

class RepositoryUsuario {
  async db_client(sqlCode, values = []) {
    const client = await connectToPostgres();
    return client.query(sqlCode, values);
  }

  async buscarUsuario() {
    const sql =
      "SELECT nome_usuario, email,endereco, data_nascimento, data_cadastro, id FROM usuario";
    const usuario = await this.db_client(sql);
    return usuario["rows"];
  }

  async verPerfil(id) {
    const sql =
      "SELECT nome_usuario, email,endereco, data_nascimento, data_cadastro, id FROM usuario WHERE id=$1";
    const values = [id];
    try {
      const usuario = await this.db_client(sql, values);
      return usuario["rows"][0];
    } catch (error) {
      console.log("Erro ao consultar o banco...");
      console.log(error);
      return {
        mensagem: "ID inválido!",
      };
    }
  }

  async criarUsuario(body) {
    const { nome_usuario, email, senha, endereco, data_nascimento } = body;
    const sql =
      "INSERT INTO usuario(nome_usuario, email , senha, endereco, data_nascimento) values ($1,$2,$3,$4,$5);";
    const values = [nome_usuario, email, senha, endereco, data_nascimento];

    await this.db_client(sql, values);
    
    const { senha: senhaUs, ...usuarioCriado } = body;

    return usuarioCriado;
  }

  async atualizarusuario(body, id) {
    const { nome_usuario, email, senha, endereco, data_nascimento } = body;
    const sql =
      "UPDATE usuario SET nome_usuario = $1, email = $2, senha = $3, endereco = $4, data_nascimento = $5 WHERE id=$6";
    const values = [nome_usuario, email, senha, endereco, data_nascimento, id];

    await this.db_client(sql, values);
    const { senha: senhaUs, ...usuarioAtualisado } = body;
    return usuarioAtualisado;
  }

  async eliminarUsuario(id) {
    const sql = "DELETE FROM usuario WHERE id=$1";
    const values = [id];
    this.db_client(sql, values);
    return {
      id: id
    }
  }
}

const repositoryUsuario = new RepositoryUsuario();
export default repositoryUsuario;
