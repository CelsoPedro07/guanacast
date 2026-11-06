import controllermensagem from "./mensagem.controller.js";
import express from "express";

const routermensagem = express.Router();

routermensagem.get(
  "/mensagem/:emissorId/:receptorId",
  controllermensagem.buscarmensagem,
);
routermensagem.post("/mensagem/:emissorId",controllermensagem.enviarMensagem);

routermensagem.put("/mensagem/:id",controllermensagem.editarMensagem);
/*
routermensagem.delete("/mensagem",);
 */
export default routermensagem;
