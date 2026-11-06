import repositoryUsuario from "./usuario.repository.js";

class ServiceUsuario {
  async buscarUsuario() {
    const Usuario = await repositoryUsuario.buscarUsuario();
    return {
      usuarios: Usuario ? Usuario : [],
      mensagem: "Lista de usuarios.",
    };
  }

  async verPerfil(id) {
    const Usuario = await repositoryUsuario.verPerfil(id);
    return {
      usuarios: Usuario ? Usuario : {},
      mensagem: "Perfil de Usuario.",
    };
  }

  async criarUsuario(body) {
    const Usuario = await repositoryUsuario.criarUsuario(body);
    return {
      usuario: Usuario ? Usuario : {},
      mensagem: "Usuario criado Com Sucesso",
    };
  }

  async atualizarusuario(body, id) {
    const Usuario = await repositoryUsuario.atualizarusuario(body, id);
    return {
      usuario: Usuario ? Usuario : {},
      mensagem: "Atualizado Com Sucesso",
    };
  }

  async eliminarUsuario(id) {
    const Usuario = await repositoryUsuario.eliminarUsuario(id);
    return {
      usuario: Usuario ? Usuario : {},
      mensagem: "Eliminado Com Sucesso",
    };
  }
}

const serviceUsuario = new ServiceUsuario();
export default serviceUsuario;
