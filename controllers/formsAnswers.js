const Clients = require('../models/clients');
const Lawyers = require('../models/lawyers');
const FormsAnswers = require('../models/formsAnswers');

exports.getForms = async (_req, res) => {
  const reports = await FormsAnswers.findAll();
  return res.status(200).json({ reports });
};

exports.getFormsByPeriod = (req, res) => {
  const data = req.body;
  const reports = FormsAnswers.findAll({
    where: { initialDate: data.createdAt, finalDate: data.createdAt },
  });
  return res.status(200).json({ reports });
};

exports.createForms = async (req, res) => {
  const {
    clientName,
    lawyerName,
    processNumber,
    ecumbrancerNumber,
    subject,
    valueCost,
  } = req.body;

  const lawyer = await Lawyers.findOne({ where: { name: lawyerName } });
  const client = await Clients.findOne({ where: { name: clientName } });

  const precatory = await FormsAnswers.create({
    clientId: client.id,
    lawyerId: lawyer.id,
    processNumber,
    ecumbrancerNumber,
    subject,
    valueCost,
  });

  return res.status(200).json({ precatory });
};
