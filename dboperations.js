var config = require('./dbconfig');
const sql = require('mssql');


async function getOrders() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Orders");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getOrder(orderId) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Int, orderId)
            .query("SELECT * from Orders");
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


async function addOrder(order) {

    try {
        let pool = await sql.connect(config);
        let insertProduct = await pool.request()
            .input('Email', sql.NVarChar, order.Email)
            .input('Password', sql.NVarChar, order.Password)
                   return insertProduct.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}






module.exports = {
    getOrders: getOrders,
    getOrder : getOrder,
    addOrder : addOrder
}