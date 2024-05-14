'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categoria', [
      { nombre: 'Acción', protegida: true, createdAt: new Date(), updatedAt: new Date() },
      { nombre: "Aventura", protegida: true, createdAt: new Date(), updatedAt: new Date() },
      { nombre: "Animación", protegida: true, createdAt: new Date(), updatedAt: new Date() },
      { nombre: "Ciencia ficción", protegida: true, createdAt: new Date(), updatedAt: new Date() },
      { nombre: "Comedia", protegida: true, createdAt: new Date(), updatedAt: new Date() },
      { nombre: "Crimen", protegida: true, createdAt: new Date(), updatedAt: new Date() },
      { nombre: "Documental", protegida: true, createdAt: new Date(), updatedAt: new Date() },
      { nombre: "Drama", protegida: true, createdAt: new Date(), updatedAt: new Date() },
      { nombre: "Familiar", protegida: true, createdAt: new Date(), updatedAt: new Date() },
      { nombre: "Fantasia", protegida: true, createdAt: new Date(), updatedAt: new Date() },
      { nombre: "Historia", protegida: true, createdAt: new Date(), updatedAt: new Date() },
      { nombre: "Horror", protegida: true, createdAt: new Date(), updatedAt: new Date() },
      { nombre: "Musica", protegida: true, createdAt: new Date(), updatedAt: new Date() },
      { nombre: "Misterio", protegida: true, createdAt: new Date(), updatedAt: new Date() },
      { nombre: "Romance", protegida: true, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categoria', null, {});
  }
};
