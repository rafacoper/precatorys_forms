export const verifyToken = jwt.verify(token, data, function (err, decoded) {
  console.log(decoded);
});
