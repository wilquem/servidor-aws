'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('inscritos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull:false
      },
      hotel: {
        type: Sequelize.STRING,
        allowNull:false
      },
      quantpessoas: {
        type: Sequelize.STRING,
        allowNull:false
      },
      estado: {
        type: Sequelize.STRING,
        allowNull:false
      },
      faccao: {
        type: Sequelize.STRING,
        allowNull:false
      },
    })
  },

  async down (queryInterface, Sequelize) {
    
  }
};
