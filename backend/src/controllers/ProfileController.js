const connection = require('../database/connection'); //Importa o arquivo de conexão com o DB

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
          .where('ong_id', ong_id)
          .select('*');

        return response.json(incidents);    
    }
}