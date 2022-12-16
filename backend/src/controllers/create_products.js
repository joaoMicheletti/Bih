const connection = require('../database/conection');


module.exports = {


    // funções para criar os produtos do tipo salgada!
    async create_product_s(request, response){
        const {Name, Description, Preço, Status, img_Salgado, Authentication} = request.body;

        const Validation = await connection('adm').where('pass', Authentication).select('pass');
        

        if(Validation.length === 0){
            return response.json('Action not permited');
        } else {
            const Data = {
                Name,
                Description, 
                Preço,
                Status,
                img_Salgado
            };
            console.log(Data);
            
            await connection('salgados').insert(Data);
    
            return response.json('Dados cadastrados');
        };
        
    },
    // salvando a imagem do salgado
    async create_img_s(request, response){
        const Image = request.file;
        console.log(Image);
        return response.json(Image.filename);
    },


// functionn para bescar os salgados disponiveis na loja!

async Get_Salgadso(request, response){
    const Data = await connection('salgados').where('Status', 'on').select('*');
    return response.json(Data);
},
//listagem de todos os itens para o adm
async Get_Salgado_adm(request, response){
    const Data = await connection('salgados').select('*');
    return response.json(Data);
},

    //funçẽes para cadastrar produtos do tipo Doce"

    async create_product_d(request, response){
        const {Name, Description, Preço, Status, img_Doce, Authentication} = request.body;
        
        const Validation = await connection('adm').where('pass', Authentication).select('pass');

        if(Validation.length === 0 ){
            return response.json("Action not Permited");
        } else {
            
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
        };
        
    },
    // salvando imagem dos doces!
    async create_img_d(request, response){
        const Image = request.file;
        console.log(Image);
 

        return response.json(Image.filename);
    },
    // listando os produtos disponiveis na loja!

    async Get_Doces(request, response){
        const Data = await connection('doces').where('Status', 'on').select('*');

        return response.json(Data);
    },
    // listagem de doces para o adm
    async Get_Doces_adm(request, response){
        const Data = await connection('doces').select('*')
        return response.json(Data);
    },

}