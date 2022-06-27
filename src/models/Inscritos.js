const { Model, DataTypes } = require('sequelize')

class Inscritos extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            hotel: DataTypes.STRING,
            quantpessoas: DataTypes.STRING,
            estado: DataTypes.STRING,
            faccao: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Inscritos;