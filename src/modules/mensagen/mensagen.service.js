import repositoryUsuario from "../usuario/usuario.repository.js";

class ServiceMensagen {
  async enviarMensagem() {
    const mensagem = await repositoryMensagen.enviarMensagem();
    return mensagem;
  }

  async receberMensagen() {
    const mensagem = await repositoryMensagen.receberMensagen();
    return mensagem;
  }
  async editarMensagem() {
    const mensagem = await repositoryMensagen.editarMensagem();
    return mensagem;
  }
  async eliminaMensagem() {
    const mensagem = await repositoryMensagen.eliminaMensagem();
    return mensagem;
  }
}

const serviceMensagen = new ServiceMensagen();
export default serviceMensagen;
