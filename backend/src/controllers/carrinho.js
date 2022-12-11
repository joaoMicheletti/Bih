const connection = require('../database/conection');
module.exports = {
    async Doce(request, response){
        const {Name, Preço, User, Quantidade, Img, Full_date} = request.body;
        const Data = {
            Name,
            Preço,
            User,
            Quantidade,
            Img,
            Full_date                         
        };
        console.log(Data)
        await connection('carrinho_doce').insert(Data);
        return response.json('adicionado ao carrinho!');
    },

    //listando Doces
    async Index_Doce( request, response){
        const data = await connection('carrinho_doce').select('*');
        return response.json(data);

    },
    async Salgado (request, response){
        const {Name, Preço, User, Quantidade, Img, Full_date} = request.body;
        const Data = {
            Name,
            Preço,
            User,
            Quantidade,
            Img,
            Full_date                       
        };
        await connection('carrinho_salgado').insert(Data);
        return response.json('Adicionado ao carrinho!');
        
    },
    //listando os salgados
    async Index_Salgado( request, response){
        const data = await connection('carrinho_salgado').select('*');
        return response.json(data);

    },
    async Dell(request, response){
        const {Cep, Nome_C, Rua, Numero} = request.body;

        const Data = {
            Cep,
            Nome_C,
            Numero,
            Rua
        };
        console.log(Data);
        return response.json(Data);
    },
};