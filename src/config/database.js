import { Pool } from "pg";

export default async function connectToPostgres() {
    if (global.connection)
        return global.connection.connect();
  
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL
    });

    //apenas testando a conexão
    await pool.connect()
    .then(() => {
        console.log("Conexão estabelecida com o banco.");        
    })
    .catch((errod) => {
        console.log("Falha na conexão ao banco.");
        console.log(errod);        
    });
    
    /*
        const res = await client.query('SELECT NOW()');
        console.log(res.rows[0]);
        client.release();
    */
    
    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}