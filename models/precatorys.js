const Sequelize = require('sequelize');
const db = require('../services/dataBase');

const Precatorys = db.define('precatorys', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  createdBy: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  clientId: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'clients',
      key: 'id',
    },
  },
  lawyerId: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'lawyers',
      key: 'id',
    },
  },
  processNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  ecumbrancerNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  subject: {
    type: Sequelize.DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [5, 200],
    },
  },
  valueCost: {
    type: Sequelize.DataTypes.STRING,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
  updatedBy: {
    type: Sequelize.INTEGER,
  },
  deletedAt: {
    type: Sequelize.DATE,
  },
});

module.exports = Precatorys;
