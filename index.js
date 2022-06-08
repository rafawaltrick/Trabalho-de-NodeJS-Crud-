const banco = require("./Banco");

async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM clientes;');
    return rows;
}


(async () => {
    const banco = require("./Banco");
    console.log('Começou!');

    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);
})();

module.exports = {selectCustomers}