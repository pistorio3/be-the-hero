const connection = require('../database/connection'); //Importa o arquivo de conexão com o DB
const crypto = require('crypto');   //Importa a funcionalidade para gerar id, do próprio Node

module.exports = {
    
    //Função de Listagem de ONGs
    async index(request,response){
        const ongs = await connection('ongs').select('*'); 

        return response.json(ongs);
    },
    
    //Função de Cadastro de ONGs
    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body; //Desestruturação dos dados da request

        const id = crypto.randomBytes(4).toString('HEX'); //Gera o id da ONG
    
        await connection('ongs').insert({ //Função que insere os dados no DB
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
    
        return response.json({ id }); //Retorna o ID da Ong cadastrada
    }

}