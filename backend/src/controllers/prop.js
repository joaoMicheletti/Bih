const connection = require('../database/conection');
const multer = require('multer');
let upload = multer();
module.exports = {
    //create on prop
    async create_prop(request, response){

        const {Texto, Image_p} = request.body;
        const Data = {
            Texto,
            Image_p
        };
        console.log(Data);
    },
    //get on prop
    async search_prop(){
        
    },
    //update on prop
    async update_prop(){
        return console.log('update_prop');
    }
}