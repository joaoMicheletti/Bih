const connection = require('../database/conection');
module.exports = {
    //editando os Salgados  
    async update_products_s(request, response){
        const {id, Description, Preço, Estoque, Status, Authentication} = request.body;
        const Data = {
            id,
            Description, 
            Preço,
            Status,
            Estoque,
            Authentication
        };
        console.log(Data);
        const Aut = await connection('adm').where('user', Authentication).select('user');
        
        if( Aut === ''){
            return response.json('Voce Não tem Autorização para fazer isso!');
        }
        console.log(Aut[0].user );

        
        await connection('salgados').where('id', id)
        .update('description', Description)
        .update('preço', Preço)
        .update('status', Status)
        .update('estoque', Estoque);
        return response.json('Produto atualizado com sucesso!!!');
    },

    //editando os Doces;
    async update_products_d(request, response){
        const {id, Description, Preço, Estoque, Status, Authentication} = request.body;
        const Data = {
            id,
            Description,
            Preço,
            Estoque,
            Status
        };
        const Aut = await connection('adm').where('user', Authentication).select('user');

        if (Aut === ''){
            return response.json('Você não tem Autorização para fazer isso!');
        }
        console.log(Data); 
        
        await connection('doces').where('id', id)
        .update('description', Description)
        .update('preço', Preço)
        .update('status', Status)
        .update('estoque', Estoque);
        return response.json('Iten atualizado com Sucesso!');
    }
}