import connectToPostgres from "../../config/database.js";

class Repositorymensagems {
  async db(sql, values = []) {
    const client = await connectToPostgres();
    return client.query(sql, values);
  }

  async buscarmensagems(emissorId, receptorId) {
    const sqlCode =
      "SELECT * FROM mensagem WHERE emissor_id = $1 AND receptor_id = $2";
    const values = [emissorId, receptorId];

    try {
      const mensagems = await this.db(sqlCode, values);
      return mensagems["rows"];
    } catch (error) {
      console.log(error);

      return {
        mensagem: "Emissor ou receptor inválido!",
      };
    }
  }

  async enviarMensagem(emissorId, body) {
    const { receptor_id, texto } = body;
    const sql =
      "INSERT INTO mensagem(emissor_id, receptor_id, texto) values ($1,$2,$3)";
    const values = [emissorId, receptor_id, texto];
    const mensagems = await this.db(sql, values);
    return { receptor_id, emissorId, texto };
  }
}

const repositorymensagems = new Repositorymensagems();
export default repositorymensagems;
