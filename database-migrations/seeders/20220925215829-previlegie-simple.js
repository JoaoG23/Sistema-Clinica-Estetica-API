'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(() => {
      return Promise.all([
        queryInterface.bulkInsert('previlegies_users', [
          {
            description: 'Full Admin',
            force: 1
          },
          {
            description: 'Colaborador',
            force: 2
          },
          {
            description: 'Cliente',
            force: 3
          }
        ]),
        // queryInterface.bulkInsert('ocupacoes', [
        //    { descricao: 'Manicure e Pedicure' },
        //    { descricao: 'Gestor' }
        // ]),
        // queryInterface.bulkInsert('tiposservicos', [
        //    { nome_servico: 'Manicure' },
        //    { nome_servico: 'Pedicure' },
        // ])
      ])
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(() => {
      return Promise.all([
        queryInterface.bulkDelete('previlegies_users', null, {}),
        queryInterface.bulkDelete('users', null, {}),
        queryInterface.bulkDelete('agendamentos', null, {}),
        queryInterface.bulkDelete('clientes', null, {}),
        queryInterface.bulkDelete('funcionarios', null, {}),
        queryInterface.bulkDelete('ocupacoes', null, {}),
        queryInterface.bulkDelete('tiposservicos', null, {}),
      ])
    });
  }
}