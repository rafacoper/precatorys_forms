const Sequelize = require('sequelize');
const db = require('../services/dataBase');

const FormsAnswers = db.define('formsAnswers', {
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
  cpf: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validator: {
      len: {
        args: [11, 11],
        msg: 'Esse CPF não é valido',
      },
    },
  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validator: {
      len: {
        args: [8, 11],
        msg: 'Preencha o telefone corretamente',
      },
    },
  },
});

module.exports = FormsAnswers;
