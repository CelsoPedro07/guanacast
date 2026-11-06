import connectToPostgres from "../../config/database.js";

class RepositoryUsuario {
  async  sqlClient(sqlCode, values = []) {
    const client = await connectToPostgres();
    return client.query(sqlCode, values);
  }

  async buscarTodos() {
    const usuarios = await this.sqlClient("SELECT * FROM usuario");
    return usuarios["rows"];
  }

  async verPerfil(id) {
    const usuario = await await this.sqlClient("SELECT * FROM usuario WHERE id=$1", [
      id,
    ]);
    return usuario["rows"];
  }

  async criarUsuarios(body) {
    const { nome_usuario, email, senha, endereco, data_nascimento } = body;
    await this.sqlClient(
      "INSERT INTO usuario(nome_usuario, email, senha, endereco, data_nascimento) VALUES ($1,$2,$3,$4,$5);",
      [nome_usuario, email, senha, endereco, data_nascimento],
    );
    return body;
  }

  async atualizarUsuario(body, id) {
    const { nome_usuario, email, senha, endereco, data_nascimento } = body;
    await this.sqlClient(
      "UPDATE usuario SET nome_usuario = $1, email = $2, senha = $3, endereco = $4, data_nascimento = $5 WHERE id=$6",
      [nome_usuario, email, senha, endereco, data_nascimento, id],
    );

    return body;
  }

  async eliminarUsuario() {
    const usuarios = await this.sqlClient("DELETE FROM usuario WHERE id=$1", [id]);
    return usuarios;
  }
}

const repositoryUsuario = new RepositoryUsuario();
export default repositoryUsuario;
