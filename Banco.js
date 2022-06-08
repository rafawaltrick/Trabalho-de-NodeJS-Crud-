async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        database: 'crud',
        password: '12345678'
    });
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;

    async function selectCustomers(){
        const conn = await connect();
        const [rows] = await conn.query('SELECT * FROM clientes;');
        return rows;
    }

    async function insertCustomer(customer){
        const conn = await connect();
        const sql = 'INSERT INTO clientes(nome,idade,uf) VALUES (?,?,?);';
        const values = [customer.nome, customer.idade, customer.estado];
        return await conn.query(sql, values);
    }
    
    module.exports = {selectCustomers}
}