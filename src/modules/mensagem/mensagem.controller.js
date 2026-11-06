import servicemensagems from "./mensagem.service.js";
class Controllermensagem {
  async buscarmensagem(req, res) {
    const { emissorId, receptorId } = req.params;
    const mensagems = await servicemensagems.buscarmensagem(
      emissorId,
      receptorId,
    );
    return res.send(mensagems);
  }

  async enviarMensagem(req, res) {
    const { emissorId } = req.params;
    const mensagem = await servicemensagems.enviarMensagem(emissorId, req.body);
    return res.send(mensagem);
  }

  async editarMensagem(req, res) {
    const { id } = req.params;
    const mensagem = await servicemensagems.editarMensagem(id, req.body);
    return res.send(mensagem);
  }
  async deletarMensagem(req, res) {
    const {id} = req.params;
    const mensagem = await servicemensagems.deletarMensagem(id);
    return res.send(mensagem);
  }
}

const controllermensagem = new Controllermensagem();
export default controllermensagem;
