const connection = require('../database/conection');


module.exports = {


    // funções para criar os produtos do tipo salgada!
    async create_product_s(request, response){
        const {Name, Description, Preço, Status, img_Salgado} = request.body;
        const Data = {
            Name,
            Description, 
            Preço,
            Status,
            img_Salgado
        };
        await connection('salgados').insert(Data);
        return console.log(Data);
        
    },
    // salvando a imagem do salgado
    async create_img_s(request, response){
        const Image = request.file;
        console.log(Image);
        return response.json(Image.filename);
    },


// functionn para bescar os salgados cadastrados!

async Get_Salgadso(request, response){
    const Data = await connection('salgados').select('*');
    return response.json(Data);
},





    //funçẽes para cadastrar produtos do tipo Doce"

    async create_product_d(request, response){
        const {Name, Description, Preço, Status, img_Doce} = request.body;

        const Data = {
            Name,
            Description,
            Preço,
            Status,
            img_Doce
        };
        console.log(Data);
        await connection('doces').insert(Data);

        return response.json('iten cadastrado!');
    },
    // salvando imagem dos doces!
    async create_img_d(request, response){
        const Image = request.file;
        console.log(Image);
 

        return response.json(Image.filename);
    },
    // listando os produtos do tipo doce cadastrados!

    async Get_Doces (request, response){
        const Data = await connection('doces').select('*');

        return response.json(Data);
    }
}