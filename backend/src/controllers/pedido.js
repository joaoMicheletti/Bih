
const connection = require('../database/conection');

module.exports = {
    async Create(request, response){
        console.log('pedido')
        return response.json("ola");
    }
}