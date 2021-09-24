'use strict';
const {encrypt} =require('../helpers/encdec')
let pwd1 = encrypt("123")
let pwd2 = encrypt("456")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users',[{
     username: 'Soni',
     password: pwd1,
     createdAt: new Date(),
     updatedAt: new Date()
   },{
    username: 'Byan',
    password: pwd2,
    createdAt: new Date(),
    updatedAt: new Date()
   }],{});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
