import repositorymensagems from "./mensagem.repository.js";
class Servicemensagems {
  async buscarmensagem(emissorId, receptorId) {
    const mensagems = await repositorymensagems.buscarmensagems(
      emissorId,
      receptorId,
    );
    return { mensagems: mensagems };
  }
  async enviarMensagem(emissorId, body) {
    const mensagen = repositorymensagems.enviarMensagem(emissorId, body);
    return mensagen;
  }
}

const servicemensagems = new Servicemensagems();
export default servicemensagems;
