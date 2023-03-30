export const signOut = (req, res) => {
  res.clearCookie('token');
  if (!req.cookies || !req.cookies.token) return;
};
