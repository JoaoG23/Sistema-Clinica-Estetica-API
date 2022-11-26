"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(() => {
      return Promise.all([
        queryInterface.createTable("retangulos", {
          id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          descricao: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          altura: {
            type: Sequelize.DataTypes.DECIMAL(12,2),
            allowNull: false,
          },
          largura: {
            type: Sequelize.DataTypes.DECIMAL(12,2),
            allowNull: false,
          },
          perimetro: {
            type: Sequelize.DataTypes.DECIMAL(12,2),
            allowNull: true,
          },
          area: {
            type: Sequelize.DataTypes.DECIMAL(12,2),
            allowNull: true,
          },
        }),

        queryInterface.createTable("triangulos", {
          id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          descricao: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          altura_lados: {
            type: Sequelize.DataTypes.DECIMAL(12,2),
            allowNull: false,
          },
          perimetro: {
            type: Sequelize.DataTypes.DECIMAL(12,2),
            allowNull: true,
          },
          area: {
            type: Sequelize.DataTypes.DECIMAL(12,2),
            allowNull: true,
          },
        }),
      ]);
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(() => {
      return Promise.all([
        queryInterface.dropTable("retangulos", { force: true }),
        queryInterface.dropTable("triangulos", { force: true }),
      ]);
    });
  },
};
