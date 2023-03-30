const Clients = require('../models/clients');
const Lawyers = require('../models/lawyers');
const Precatorys = require('../models/precatorys');

exports.getPrecatorys = async (_req, res) => {
  const reports = await Precatorys.findAll();
  return res.status(200).json({ reports });
};

exports.getPrecatorysByPeriod = (req, res) => {
  const data = req.body;
  const reports = Precatorys.findAll({
    where: { initialDate: data.createdAt, finalDate: data.createdAt },
  });
  return res.status(200).json({ reports });
};

exports.createPrecatorys = async (req, res) => {
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

  const precatory = await Precatorys.create({
    clientId: client.id,
    lawyerId: lawyer.id,
    processNumber,
    ecumbrancerNumber,
    subject,
    valueCost,
  });

  return res.status(200).json({ precatory });
};
