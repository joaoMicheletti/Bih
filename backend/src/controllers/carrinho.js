const connection = require('../database/conection');
module.exports = {
    async Doce(request, repose){
        const {Name, Preço, User, Quantidade} = request.body;
        const Data = {
            Name,
            Preço,
            User,
            Quantidade,
            //Img                         
        };
        //await connection('carrinho_doce').insert(Data);
        return console.log(Data);
    }
}