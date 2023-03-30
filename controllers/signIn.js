const Users = require('../models/users');
const { encrypter } = require('../services/encripter');

exports.signIn = async (req, res) => {
  const user = await Users.findOne(req.body);

  if (!user.email) throw Error({ message: 'Email não confere' });
  if (!user.password) throw Error({ message: 'Senha não confere' });

  const correctPassword = encrypter.compare(password, user.password);

  if (!correctPassword) throw Error({ message: 'Senha incorreta' });

  const accessToken = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      user,
    },
    secret
  );

  SESSIONS[token] = user.id;
  res.cookie('token', accessToken);
};
