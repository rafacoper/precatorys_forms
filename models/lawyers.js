const Sequelize = require('sequelize');
const db = require('../services/dataBase');
const Precatorys = require('./precatorys');

const Lawyers = db.define('lawyers', {
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

Lawyers.hasMany(Precatorys);

module.exports = Lawyers;
