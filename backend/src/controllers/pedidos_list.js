const connection = require('../database/conection');

module.exports = {
    async Index(request, response){
        var cozinha = 'cozinha';
        const Data = await connection('pedidos').where('status', cozinha).select('*');
        console.log(Data);

        return response.json(Data);
    },
    async Upload_pedido(request, response){
        const Drive = 'Drive';

        const {data} = request.body;

        await connection('pedidos').where('id', data.ID)
        .update('status', Drive);

        console.log(data);
        
        return response.json('pedido sendo enviado!');
    },
    async List_vendidos(request, response){
        const Drive = 'Drive';
        const Data = await connection('pedidos').where('status', Drive).select('*');

        return response.json(Data);
    }
}