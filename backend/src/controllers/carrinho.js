const { response } = require('express');
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
        console.log(Data)
        await connection('carrinho_salgado').insert(Data);
        return response.json('adicionado ao carrinho!');
        
    },
    //listando os salgados
    async Index_Salgado( request, response){
        const data = await connection('carrinho_salgado').select('*');
        return response.json(data);

    },
}