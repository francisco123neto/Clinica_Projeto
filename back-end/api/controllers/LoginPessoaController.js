const database = require('../models')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

class LoginPessoaController{
    static async pessoaAuthentic(req, res) {
        const {email, senha} = req.body

        try {
            const pessoa = await database.Pessoas.findOne({
                attributes: ['id', 'nome', 'email', 'senha'],
                where: {email} })
            if(!pessoa) {
                return res.status(400).json({
                    error:true, 
                    messagem: 'Usuário não encontrado!'
                })
            }
            const compararSenha = await bcryptjs.compare(senha, pessoa.senha)

            if(!compararSenha){
                return res.status(400).json({
                    error:true, 
                    messagem: 'Usuário ou senha incorreta!'
                })
            }

            const keySecret = 'ga474501'
            const token = jwt.sign({id: pessoa.id}, keySecret)
            
            return res.status(200).json({pessoa, token})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = LoginPessoaController