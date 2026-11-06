import {mensagencontroller} from "./mensagen.controller.js";
import { Router } from "express";
const  routeMensagen = Router();


mensagencontroller.post("/mensagem",mensagencontroller.enviarMensagem());
mensagencontroller.get("/mensagem",mensagencontroller.receberMensagem());
mensagencontroller.put("/mensagem",mensagencontroller.editarMensagem());
mensagencontroller.delete("/mensagem",mensagencontroller.eliminarMensagem());

export default routeMensagen;