'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shortName: {
        type: Sequelize.STRING
      },
      fullName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      group: {
        type: Sequelize.ENUM('igneous', 'sedimentary', 'metamorphic')
      },
      image: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Rocks');
  }
};