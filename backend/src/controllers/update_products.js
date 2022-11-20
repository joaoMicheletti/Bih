const connection = require('../database/conection');
module.exports = {
    async update_products_s(reques, response){
        const {id, Name, Description, Preço, Status} = reques.body;
        const Data = {
            id,
            Name,
            Description, 
            Preço,
            Status
        };
        await connection('salgados').where('id', id)
        .update('name', Name)
        .update('description', Description)
        .update('preço', Preço)
        .update('status', Status)
        return response.json('Produto atualizado com sucesso!!!');
    },
    async update_products_d(){
        return console.log('update_products_d');
    }
}