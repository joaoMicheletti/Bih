const connection = require('../database/conection');

module.exports = {
    // create a user
    async register_user(request, response){

        const {Phone, Pass } = request.body;
        console.log(Phone, Pass);
        const Confirmation = await connection('user').where('phone', Phone).select('*')
        if (Confirmation.length === 0 ) {
            await connection('user').insert({
                Phone,
                Pass
        });
            return response.json(Phone);
        } else {
            return response.json('Número já cadastrado!!!');
        }
    },

    // create session of user
    async login_user(request, response){
        const {Phone, Pass} = request.body;

        const User = await connection('user').where('phone', Phone).select('phone');
        const C_Pass = await connection('user').where('phone', Phone).select('pass');
        console.log(User[0].phone);

        if (User.length === 0){

            return response.json('Erro: Falha no Login!');

        } else if(C_Pass[0].pass === Pass) { 

            return response.json(User[0].phone);

        } else {
            
            return response.json('Erro: Falha no Login!');
        }
        
        //return response.json(User);

            
    }
}