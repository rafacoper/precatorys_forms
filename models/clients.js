const Sequelize = require('sequelize');
const db = require('../services/dataBase');
const Precatorys = require('./precatorys');

const Clients = db.define('clients', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Required',
      },
    },
  },
});

Clients.hasMany(Precatorys);

module.exports = Clients;
