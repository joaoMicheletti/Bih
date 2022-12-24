
const connection = require('../database/conection');

module.exports = {
    async Create(request, response){
        const {NameC, Iduser, Rua, Casa, Cep,  Name, Preço, Quantidade, Troco} = request.body

        const Data = {
            NameC,
            Iduser, 
            Rua, 
            Casa, 
            Cep,  
            Name, 
            Preço, 
            Quantidade, 
            Troco
        };
        await connection('pedidos').insert(Data);
        console.log(Data);
        return response.json("ola");
    },

}