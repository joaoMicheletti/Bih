
module.exports = {
    //create a salgados
    async create_product_s(request, response){
        const {Name, Description, Preço, Status, img_Salgado} = request.body;
        const Data = {
            Name,
            Description,
            Preço,
            Status,
            img_Salgado
        };
        return console.log(img_Salgado.data);
        
    },
    async create_img_s(request, response){
        const Image = request.file;
        return response.json(Image.filename);
    },







    //create a doces
    async create_product_d(){
        return console.log('create a doces');
    },
    async create_img_d(request, response){
        return response.json('criaçã da imagem do doce!!!!')
    }
}