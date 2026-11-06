import serviceMensagen  from "./mensagen.service.js";

class Controllermensagem {
  async enviarMensagen(req, res) {
    const mensagem = await serviceMensagen.enviarMensagen();
    return res.send(mensagem);
  }
  async resceberMensagem(req, res) {
    const mensagem = await serviceMensagen.resceberMensagem();
    return res.send(mensagem);
  }
  async editarMensagem(req, res) {
    const mensagem = await serviceMensagen.editarMensagem();
    return res.send(mensagem);
  }
  async eliminarMensagem(req, res) {
    const mensagem = await serviceMensagen.eliminarMensagem();
    return res.send(mensagem);
  }
}

const controllermensagem = new Controllermensagem();
export default controllermensagem;
