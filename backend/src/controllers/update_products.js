const connection = require('../database/conection');
module.exports = {
    //editando os Salgados  
    async update_products_s(request, response){
        const {id, Name, Description, Preço, Status, Authentication} = request.body;
        const Data = {
            id,
            Name,
            Description, 
            Preço,
            Status,
            Authentication
        };
        console.log(Data);
        const Aut = await connection('adm').where('user', Authentication).select('user');
        
        if( Aut === ''){
            return response.json('Voce Não tem Autorização para fazer isso!');
        }
        console.log(Aut[0].user );

        
        await connection('salgados').where('id', id)
        .update('name', Name)
        .update('description', Description)
        .update('preço', Preço)
        .update('status', Status)
        return response.json('Produto atualizado com sucesso!!!');
    },

    //editando os Doces;
    async update_products_d(request, response){
        const {id, Name, Description, Preço, Status} = request.body;
        const Data = {
            id,
            Name,
            Description,
            Preço,
            Status
        };
        console.log(Data); 
        await connection('doces').where('id', id)
        .update('name', Name)
        .update('description', Description)
        .update('preço', Preço)
        .update('status', Status);
        return response.json('Iten atualizado com Sucesso!');
    }
}