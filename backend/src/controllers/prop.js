const connection = require('../database/conection');
const multer = require('multer');
let upload = multer();
module.exports = {
    //create on prop
    async create_prop(request, response){

        const {Texto, img_propaganda} = request.body;
        const Data  = {
            Texto,
            img_propaganda
        };
        console.log(Data);
        await connection('propaganda').insert(Data);
        console.log(Data);
        return response.json('iten Cadastrado!!!'); 
    
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
    async update_prop(){
        return console.log('update_prop');
    }
}