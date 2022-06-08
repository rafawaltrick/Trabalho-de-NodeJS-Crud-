(async () => {
const banco = require("./Banco");

console.log('Começou!');
    
console.log('INSERT INTO CLIENTES');
    const result = await banco.insertCustomer({nome: "Zé", idade: 18, estado: "SP"});
    console.log(result);

console.log('SELECT * FROM CLIENTES');
    const clientes = await banco.selectCustomers();
    console.log(clientes);

console.log('UPDATE CLIENTES');
    const result2 = await banco.updateCustomer(6, {nome: "Zé José", idade: 19, estado: "SP"});
    console.log(result2);

console.log('DELETE FROM CLIENTES');
    const result3 = await banco.deleteCustomer(7);
    console.log(result3);

})();