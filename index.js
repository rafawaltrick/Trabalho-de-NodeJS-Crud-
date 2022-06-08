const banco = require("./Banco");

async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM clientes;');
    return rows;
}

//index.js
(async () => {
    const db = require("./Banco");
    console.log('Começou!');
    
    console.log('INSERT INTO CLIENTES');
    const result = await db.insertCustomer({nome: "Zé", idade: 18, estado: "SP"});
    console.log(result);

    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);
})();


(async () => {
    const banco = require("./Banco");
    console.log('Começou!');

    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);
})();

module.exports = {selectCustomers}