const coordenadas = require('coordenadas-do-cep');

module.exports = {
    async Index(request, response){
        const {Cep} = request.body;
        const Coor = await coordenadas.getDistEntreCeps('06315180', Cep)
        let Distance = Coor;
        console.log(Distance);
        return response.json((Distance * 3 ) * 1.5);
    },
}