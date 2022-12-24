const connection = require('../database/conection');

module.exports = {
    async Index(request, response){
        const Data = await connection('pedidos').select('*');
        console.log(Data);

        return response.json(Data);
    }
}