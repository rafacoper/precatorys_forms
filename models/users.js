const Sequelize = require('sequelize');
const db = require('../services/dataBase');

const Users = db.define('users', {
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
  password: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Required',
      },
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validator: {
      len: {
        args: [8, 60],
        msg: 'Esse e-mail não é valido',
      },
    },
  },
});

module.exports = Users;
