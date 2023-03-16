
const connection = require('../database/conection');

module.exports = {
    async Create(request, response){
        const {np, NameC, Iduser, Rua, Casa, Cep,  Name_p, Preço, Quantidade, Troco, Status} = request.body
        const Data = {
            NameC,
            Iduser, 
            Rua, 
            Casa, 
            Cep,  
            Name_p, 
            Preço, 
            Quantidade, 
            Troco,
            Status,
            np,
        };
        console.log(Data);
        await connection('pedidos').insert(Data);
        
        return response.json('ola');
    },
}