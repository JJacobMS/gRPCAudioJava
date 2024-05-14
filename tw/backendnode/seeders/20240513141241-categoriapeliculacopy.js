'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('categoriapelicula', [
      { peliculaid: 1, categoriaid: 6, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 2, categoriaid: 6, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 2, categoriaid: 8, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 3, categoriaid: 1, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 3, categoriaid: 2, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 3, categoriaid: 8, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 4, categoriaid: 8, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 5, categoriaid: 6, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 5, categoriaid: 8, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 6, categoriaid: 8, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 6, categoriaid: 15, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 7, categoriaid: 8, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 8, categoriaid: 1, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 8, categoriaid: 2, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 9, categoriaid: 1, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 9, categoriaid: 2, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 9, categoriaid: 10, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 10, categoriaid: 1, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 10, categoriaid: 4, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 11, categoriaid: 1, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 11, categoriaid: 2, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 11, categoriaid: 4, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 12, categoriaid: 1, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 12, categoriaid: 2, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 12, categoriaid: 8, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 13, categoriaid: 1, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 13, categoriaid: 2, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 13, categoriaid: 4, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 14, categoriaid: 2, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 14, categoriaid: 4, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 14, categoriaid: 5, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 15, categoriaid: 2, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 15, categoriaid: 5, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 15, categoriaid: 10, createdAt: new Date(), updatedAt: new Date() }
    ]);

  },

  async down (queryInterface, Sequelize) {
+
    await queryInterface.bulkDelete('categoriapelicula', null, {});
  
  }
};
