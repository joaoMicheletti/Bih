const { request } = require('express');
const connection = require('../database/conection');
module.exports = {
    async Doce(request, response){
        const {Estoque, Name, Preço, User, Quantidade, Img, Full_date} = request.body;
        const Data = {
            Name,
            Preço,
            User,
            Quantidade,
            Img,
            Estoque,
            Full_date                         
        };
        console.log(Data)
        await connection('carrinho_doce').insert(Data);
        const RR = await connection('carrinho_doce').select('*');
        console.log(RR);
        return response.json('adicionado ao carrinho!');
    },
    //listando Doces
    async Index_Doce( request, response){
        const {User} = request.body;
        const User_String = User.toString();
        
        const Data = new Date();
        const Dia = Data.getDate();
        const Mes = Data.getMonth() + 1;
        const Ano = Data.getFullYear();
        const Full_date = Dia+'/'+Mes+'/'+Ano;
        const data = await connection('carrinho_doce')
        .where('user', User_String)
        .where('full_date', Full_date)
        .select('*');

        console.log(data);

        return response.json(data);
    },
    //buscando pedido  do tipo Doce para a pagina confirm
    async Index_Doces_Confirm(request, response){
        const {Prod_id} = request.body;
        console.log('confirm');
        console.log(Prod_id);
        const Response = await connection('carrinho_doce').where('id', Prod_id);
        console.log(Response[0]);
        return response.json(Response);

    },

    async Index_Salgado_Confirm(request, response){
        const {Prod_id_s} = request.body;
        console.log('confirm');
        console.log(Prod_id_s);
        const Response = await connection('carrinho_salgado').where('id', Prod_id_s);
        console.log(Response[0]);
        return response.json(Response);
    },

    async Salgado (request, response){
        const {Estoque, Name, Preço, User, Quantidade, Img, Full_date} = request.body;
        const Data = {
            Name,
            Preço,
            User,
            Quantidade,
            Img,
            Estoque,
            Full_date                       
        };
        const DD = await connection('carrinho_salgado').insert(Data);
        console.log(DD);
        return response.json('Adicionado ao carrinho!');
        
    },
    //listando os salgados
    async Index_Salgado( request, response){
        const {User} = request.body;
        const User_String = User.toString();

        const Data = new Date();
        const Dia = Data.getDate();
        const Mes = Data.getMonth() + 1;
        const Ano = Data.getFullYear();
        const Full_date = Dia+'/'+Mes+'/'+Ano;

        const data = await connection('carrinho_salgado')
        .where('user', User_String).where('full_date', Full_date).select('*');
        console.log(data);

        return response.json(data);

    },
    async Deletar(request, response) {
        const {Id, Name, Quantidade, Preço} = request.body; //corpo da request,
        await connection('carrinho_doce').where('id', Id).delete();
        return response.json('Deleted!');
    },
    async Dell_s(request, response){
        const {Id, Name, Quantidade, Preço} = request.body; //corpo da request,
        await connection('carrinho_salgado').where('id', Id).delete();
        return response.json('Deleted!');
    },
    //update pedido finalizado;
    async Update_D(request, response){
        const{Id} = request.body;
        console.log(Id);
        await connection('carrinho_doce').where('id', Id).update('full_date', 'off');

        return response.json('ok');
    },
    async Update_S(request, response){
        const{Id} = request.body;
        await connection('carrinho_salgado').where('id', Id).update('full_date', 'off');

        return response.json('ok');

    },
    // fazendo uma busca no banco de dados, afin de saber se o estoque já foi comprometido...
    async Estoque_S(request, response){
        const {Namme, Quantt} = request.body;
        const Res = await connection('salgados').where('name', Namme).select('estoque');
        console.log('Estoque_Salgado: >   ' +Namme);
        console.log(Quantt);
        console.log(Res)

        if(parseInt(Res[0].estoque) < Quantt){
            
            return response.json('Nosso estoque, Não atende essa quantidade!');
        } else {
            return response.json('ok');
        };
    },
    async Estoque_D(request, response){
        const {Name_D, Quantidade_D} = request.body;

        const Res = await connection('doces').where('name', Name_D).select('estoque');
        console.log('Estoque_Salgado: >   ' +Name_D);
        console.log(Res);
        console.log(Quantidade_D)

        if(parseInt(Res[0].estoque) < Quantidade_D){
            
            return response.json('Nosso estoque, Não atende essa quantidade!');
        } else {
            return response.json('ok');
        };
    },
};
