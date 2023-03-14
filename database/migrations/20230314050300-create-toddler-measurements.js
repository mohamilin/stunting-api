'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('toddler_measurements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      berat_badan: {
        type: Sequelize.FLOAT
      },
      tinggi_badan: {
        type: Sequelize.FLOAT
      },
      lingkar_lengan_atas: {
        type: Sequelize.FLOAT
      },
      week_id: {
        type: Sequelize.INTEGER
      },
      toodler_id: {
        type: Sequelize.INTEGER
      },
      nakes_id: {
        type: Sequelize.INTEGER
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      updated_by: {
        type: Sequelize.INTEGER
      },
      deleted_by: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('toddler_measurements');
  }
};