const connection = require('../database/conection');
const multer = require('multer');
let upload = multer();
module.exports = {
    //create on prop
    async create_prop(request, response){

        const {Texto, img_propaganda, Authentication} = request.body;

        const Validation = await connection('adm').where('pass', Authentication).select('pass');
        if(Validation.length === 0 ){
            return response.json('Action not Permited');
        } else {
            
            const Data  = {
                Texto,
                img_propaganda
            };
            
            await connection('propaganda').insert(Data);
            console.log(Data);
            return response.json('iten Cadastrado!!!');
        }; 
    
    },
    //salvando imagem da propaganda!
    async Img_prop(request, response){

        const Image = request.file;

        console.log(Image.filename);
        return response.json(Image.filename);
        
    },

    async get_prop_img(request, response){
        const Data = await connection('propaganda').select('*');
        return response.json(Data);
    },
    //update on prop
    async update_prop(request, response){
        const {Texto, img_propaganda, Authentication} = request.body;

        const Validation = await connection('adm').where('pass', Authentication).select('pass');
        if(Validation.length === 0 ){
            return response.json('Action not Permited');
        } else {
            const Data  = {
                Texto,
                img_propaganda
            };
            await connection('propaganda').select('Texto').update('Texto', Texto);
            await connection('propaganda').select('img_propaganda').update('img_propaganda', img_propaganda);
            return response.json('ok');

        };
        
    }
}