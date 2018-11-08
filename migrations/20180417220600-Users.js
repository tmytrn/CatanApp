'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username:{
        type:Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password:{
        type:Sequelize.STRING,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      profile_pic_path:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
