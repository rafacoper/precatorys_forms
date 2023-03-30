const Users = require('../models/users');

exports.getUsers = async (req, res) => {
  const users = await Users.findAll();
  return res.status(200).json({ users: users });
};

exports.getUser = (req, res) => {
  const userId = req.params.userId;
  const user = Users.findByPk(userId);
  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado!' });
  }
  res.status(200).json({ user: user });
};

exports.createUser = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const user = await Users.create({
    name: name,
    email: email,
  });
  return res.status(201).json({
    message: 'Usuário criado com sucesso!',
    user,
  });
};

exports.updateUser = async (req, res) => {
  const userId = req.params.userId;
  const updatedName = req.body.name;
  const updatedEmail = req.body.email;
  const user = await Users.findByPk(userId);
  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado!' });
  }

  user.name = updatedName;
  user.email = updatedEmail;
  user.save();

  return res.status(200).json({ message: 'Usuário atualizado', user: result });
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.userId;
  const user = await Users.findByPk(userId);
  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado!' });
  }

  Users.destroy({
    where: {
      id: userId,
    },
  });

  return res.status(200).json({ message: 'Usuário deletado!' });
};
