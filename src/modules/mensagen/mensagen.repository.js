import connectToPostgres from "../../config/database.js";

class repositoryMensagen{
    async db_client(){
        const client = await connectToPostgres();
        return client.query();
    }
    async enviarMensagem(){
        const sql ="SELECT * FROM mensagem";
        const mensagem = this.db_client(sql);
        return mensagem;
    }
    async receberMensagem(){
        

    }
}