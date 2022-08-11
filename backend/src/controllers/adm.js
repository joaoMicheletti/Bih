const connection = require('../database/conection');
module.exports = {
    async create_adm(request, response){
        const {User, Pass} = request.body;
        const Confirmation = await connection('adm').where('user', User).select('user');
        
       
        if(Confirmation.length === 0 ){
            await connection('adm').insert({
                User,
                Pass
            })
        } else {
            return response.json('Usuario já cadastrado!!!')
        }
        
       
        return response.json('Cadastrado!!!');
    },


    async login_adm(request, response){
        const {User, Pass} = request.body;

        const C_User = await connection('adm').where('user', User).select('user');
        const C_Pass = await connection('adm').where('user', User).select('pass');

        if (C_User.length === 0 ){

            return response.json('erro no login');

        } else if (C_Pass[0].pass === Pass ){

            return response.json(C_Pass);
        } else {
            return response.json('erro no login');
        }    
              
    }
}      