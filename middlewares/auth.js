import { findById } from '../models/users';

const getUser = async (req) => {
  const { token = '' } = req.cookies || {};
  if (!token) return null;

  const userId = SESSIONS[token];
  if (!userId) return null;

  const user = await findById(userId);
  if (!user) return null;

  return user;
};

const authMiddleware = async (req, _res, next) => {
  const user = await getUser(req);

  if (!user) return next();

  const { password, ...userData } = user;

  req.user = userData;

  return next();
};

export default {
  SESSIONS,
  authMiddleware,
};
