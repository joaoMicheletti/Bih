const connection = require('../database/conection');

module.exports = {
    // create a user
    async register_user(request, response){
        const header = request.header;

        const {phone, pass } = request.body;
        await connection('user').insert({
            pass,
            phone            
        })
        console.log(phone, pass, header[1]);
        return response.json();
    },

    // create session of user
    async login_user(request, response){
        const {phone, pass} = request.body;
        const list = await connection('user').where('phone', phone).select('*');
        return response.json(list);
    
    }
}