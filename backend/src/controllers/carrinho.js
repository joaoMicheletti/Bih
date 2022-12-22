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
        const {User} = request.body;
        const User_String = User.toString();
        
        const Data = new Date();
        const Dia = Data.getDate();
        const Mes = Data.getMonth() + 1;
        const Ano = Data.getFullYear();
        const Full_date = Dia+'/'+Mes+'/'+Ano;
        const data = await connection('carrinho_doce')
        .where('user', User_String).where('full_date', Full_date).select('*');
        console.log(data);

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
};
