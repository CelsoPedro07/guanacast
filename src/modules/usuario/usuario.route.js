import controllerUsuario from "./usuario.controller.js";
import express from "express"
const routeUsuario = express.Router();

routeUsuario.get("/usuario",controllerUsuario.buscarUsuario);
routeUsuario.get("/usuario/:id", controllerUsuario.VerPerfil)
routeUsuario.post("/usuario",controllerUsuario.criarUsuario);
routeUsuario.put("/usuario/:id",controllerUsuario.atualizarusuario);
routeUsuario.delete("/usuario/:id", controllerUsuario.eliminarUsuario);

export default routeUsuario;