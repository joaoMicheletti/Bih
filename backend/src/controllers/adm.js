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
            console.log('j C');
            return response.json('Usuario já cadastrado!!!')
        }
        
        console.log('C');
        return response.json('Cadastrado!!!');
    },


    async login_adm(request, response){
        const {User, Pass} = request.body;

        const C_User = await connection('adm').where('user', User).select('user');
        const C_Pass = await connection('adm').where('user', User).select('pass');
        console.log(C_User);

        if (C_User.length === 0 ){

            return response.json('erro no login');

        } else if (C_Pass[0].pass === Pass ){

            return response.json(C_User[0].user);
        } else {
            return response.json('erro no login');
        }      
    },

    async Index_adm(request, response) {
        const Data =  await connection('adm').select('*');
        return response.json(Data);
    }
}      