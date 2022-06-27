const Inscritos = require('../models/Inscritos')

module.exports = {
    async index(req,res){
        const inscritos = await Inscritos.findAll();
        return res.json(inscritos)
    },

    async findByid(req,res){
        const { id } = req.params;
        const inscritos = await Inscritos.findAll({
            where: {
                id:id
            }
        });
        return res.json(inscritos)
    },

    async register(req,res){
        const { nome, hotel, quantpessoas, estado, faccao } = req.body;
        const inscritos = await Inscritos.create({
            nome, hotel, quantpessoas, estado, faccao
        });
        return res.json(inscritos)
    },

    async delete(req,res){
        const { id } = req.params;
        const inscritos = await Inscritos.destroy({
            where: {
                id:id
            }
        });
        return res.json(inscritos)
    },

    async edit(req,res){
        const {id, nome, hotel, quantpessoas,estado,faccao } = req.body;
        const inscritos = await Inscritos.update({
            nome, hotel, quantpessoas,estado,faccao
        }, {
            where: {
                id: id
            }
        });
        return res.json(inscritos)
    },
}