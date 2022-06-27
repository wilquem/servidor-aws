const Sequelize = require('sequelize');
const dbConfig = require('../config/database')
const Inscritos = require('../models/Inscritos')

const connection = new Sequelize(dbConfig)

Inscritos.init(connection)

module.exports = connection