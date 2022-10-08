'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    return queryInterface.sequelize.transaction(() => {
      return Promise.all([
        queryInterface.createTable('previlegies_users', {
          id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          description: {
            type: Sequelize.DataTypes.STRING(20),
            allowNull: false,
          },
          force: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
          }
        }),




        queryInterface.createTable('users', {
          id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          name: {
            type: Sequelize.DataTypes.STRING(70),
            allowNull: false,
            validate: {
              notEmpty: true
            }
          },
          userName: {
            type: Sequelize.DataTypes.STRING(70),
            allowNull: false,
            unique: true,
            validate: {
              notEmpty: true
            }
          },
          password: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false,
            validate: {
              notEmpty: true
            }
          },
          phonenumber: {
            type: Sequelize.DataTypes.STRING(20),
            allowNull: false,
            unique: true
          },
          email: {
            type: Sequelize.DataTypes.STRING(70),
            allowNull: false,
            unique: true
          },
          idPrevilegies: {
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER,
            defaultValue: 1,
            references: {
              model: 'previlegies_users',
              key: 'id'
            }
          },
          createdAt:{
            type: Sequelize.DataTypes.DATE,
          },
          updatedAt:{
            type: Sequelize.DataTypes.DATE,
          }
        })
      ]);
    })

  },

  async down(queryInterface, Sequelize) {

    return queryInterface.sequelize.transaction(() => {
      return Promise.all([
        queryInterface.dropTable('previlegies_users', { force: true }),
        queryInterface.dropTable('users', { force: true })
      ]);
    });
  }
}