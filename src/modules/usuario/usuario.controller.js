import serviceUsuario from "./usuario.service.js";

class ControllerUsuario {
  async buscarUsuario(req, res) {
    const Usuarios = await serviceUsuario.buscarUsuario();
    return res.send(Usuarios);
  }

  async VerPerfil(req, res) {
    const Usuario = await serviceUsuario.verPerfil(req.params.id);
    return res.send(Usuario);
  }

  async criarUsuario(req, res) {
    const Usuario = await serviceUsuario.criarUsuario(req.body);
    return res.send(Usuario);
  }

  async atualizarusuario(req, res) {
    const Usuario = await serviceUsuario.atualizarusuario(
      req.body,
      req.params.id,
    );
    return res.send(Usuario);
  }

  async eliminarUsuario(req, res) {
    const Usuario = await serviceUsuario.eliminarUsuario(req.params.id);
    return res.send(Usuario);
  }
}

const controllerUsuario = new ControllerUsuario();
export default controllerUsuario;
