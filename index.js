import express from "express";
import dotenv from "dotenv";
import routeUsuario from "./src/modules/usuario/usuario.route.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(routeUsuario)

app.listen(process.env.PORTA,()=>{
    console.log("Rodando o servidor "+ process.env.PORTA);
    
})