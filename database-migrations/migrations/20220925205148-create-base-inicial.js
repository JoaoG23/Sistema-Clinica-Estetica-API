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
          userName: {
            type: Sequelize.DataTypes.STRING(70),
            allowNull: false,
            unique: true,
            validate: {
              notEmpty: true,
            },
          },
          email: {
            type: Sequelize.DataTypes.STRING(70),
            allowNull: false,
            unique: true,
            validate: {
              notEmpty: true,
            },
          },
          password: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false,
            validate: {
              notEmpty: true,
            },
          },
          idPrevilegies: {
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER,
            defaultValue: 1,
            references: {
              model: "previlegies_users",
              key: "id",
            },
          },
          createdAt: {
            type: Sequelize.DataTypes.DATE,
          },
          updatedAt: {
            type: Sequelize.DataTypes.DATE,
          }
        }),

        queryInterface.createTable('clientes',
          {
            id: {
              type: Sequelize.DataTypes.INTEGER,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true,
            },
            nome_cliente: {
              type: Sequelize.DataTypes.STRING(70),
              allowNull: false,
              validate: {
                notEmpty: true,
              },
            },
            endereco: {
              type: Sequelize.DataTypes.STRING(70),
            },
            telefone: {
              type: Sequelize.DataTypes.STRING(20),
              allowNull: false,
              unique: true,
            },
            observacoes: {
              type: Sequelize.DataTypes.STRING(100),
            },
            id_usuario: {
              allowNull: false,
              type: Sequelize.DataTypes.INTEGER,
              defaultValue: 1,
              references: {
                model: "users",
                key: "id",
              },
            },
          },
        ),

        queryInterface.createTable('funcionarios',
          {
            id: {
              type: Sequelize.DataTypes.INTEGER,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true,
            },
            nome_funcionario: {
              type: Sequelize.DataTypes.STRING(70),
              allowNull: false,
              validate: {
                notEmpty: true,
              },
            },
            endereco: {
              type: Sequelize.DataTypes.STRING(70),
            },
            telefone: {
              type: Sequelize.DataTypes.STRING(20),
              allowNull: false,
              unique: true,
            },
            id_ocupacao: {
              allowNull: false,
              type: Sequelize.DataTypes.INTEGER,
              defaultValue: 1,
              references: {
                model: "ocupacoes",
                key: "id",
              },
            },
            id_usuario: {
              allowNull: false,
              type: Sequelize.DataTypes.INTEGER,
              defaultValue: 1,
              unique: true,
              references: {
                model: "users",
                key: "id",
              },
            },
          }
        ),
        queryInterface.createTable('ocupacoes',
          {
            id: {
              type: Sequelize.DataTypes.INTEGER,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true,
            },
            descricao: {
              type: Sequelize.DataTypes.STRING(45),
              allowNull: false,
              validate: {
                notEmpty: true
              }
            },
          }
        ),
        queryInterface.createTable('agendamentos',
          {
            id: {
              type: Sequelize.DataTypes.INTEGER,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true,
            },
            entrada_horario: {
              type: Sequelize.DataTypes.DATE,
              allowNull: false,
              validate: {
                notEmpty: true,
              },
            },
            saida_horario: {
              type: Sequelize.DataTypes.DATE,
              allowNull: false,
              validate: {
                notEmpty: true,
              },
            },
            id_cliente: {
              allowNull: false,
              type: Sequelize.DataTypes.INTEGER,
              defaultValue: 1,
              references: {
                model: "clientes",
                key: "id",
              },
            },
            id_funcionario: {
              allowNull: false,
              type: Sequelize.DataTypes.INTEGER,
              defaultValue: 1,
              references: {
                model: "funcionarios",
                key: "id",
              },
            },
            id_tipo_servico: {
              allowNull: false,
              type: Sequelize.DataTypes.INTEGER,
              defaultValue: 1,
              references: {
                model: "tiposservicos",
                key: "id",
              },
            },
            is_marcado: {
              allowNull: false,
              type: Sequelize.DataTypes.BOOLEAN,
              defaultValue: true,
            },
            status_pagamento: {
              allowNull: false,
              type: Sequelize.DataTypes.STRING,
              defaultValue: '',
            },
            valor_pago: {
              allowNull: false,
              type: Sequelize.DataTypes.DECIMAL(10, 2),
              defaultValue: 0,
            },
            observacoes: {
              type: Sequelize.DataTypes.STRING,
              defaultValue: '',
            },
          }
        ),
        queryInterface.createTable('tiposservicos',
          {
            id: {
              type: Sequelize.DataTypes.INTEGER,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true,
            },
            nome_servico: {
              type: Sequelize.DataTypes.STRING(45),
              allowNull: false,
              validate: {
                notEmpty: true
              }
            },
          }
        ),
        
        queryInterface.createTable('historico_agendamentos',
        {
          id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          entrada_horario: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
            validate: {
              notEmpty: true,
            },
          },
          saida_horario: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
            validate: {
              notEmpty: true,
            },
          },
          id_cliente: {
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER,
            defaultValue: 1,
          },
          cliente_nome: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          id_funcionario: {
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER,
            defaultValue: 1,
          },
          funcionario_nome: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true,
            },
          },
          id_tipo_servico: {
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER,
            defaultValue: 1
          },
          tipo_servico_nome: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true,
            },
          },
          is_marcado: {
            allowNull: false,
            type: Sequelize.DataTypes.BOOLEAN,
            defaultValue: true,
          },
          status_pagamento: {
            allowNull: false,
            type: Sequelize.DataTypes.STRING,
            defaultValue: "pago",
          },
          valor_pago: {
            allowNull: false,
            type: Sequelize.DataTypes.DECIMAL(10, 2),
            defaultValue: 0,
          },
          observacoes: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: "",
          },
        })



      ]);
    })

  },

  async down(queryInterface, Sequelize) {

    return queryInterface.sequelize.transaction(() => {
      return Promise.all([
        queryInterface.dropTable('previlegies_users', { force: true }),
        queryInterface.dropTable('users', { force: true }),
        queryInterface.dropTable('clientes', { force: true }),
        queryInterface.dropTable('funcionarios', { force: true }),
        queryInterface.dropTable('tiposservicos', { force: true }),
        queryInterface.dropTable('agendamentos', { force: true }),
        queryInterface.dropTable('ocupacoes', { force: true }),
      ]);
    });
  }
}