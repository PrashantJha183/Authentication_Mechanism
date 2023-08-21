const jwt = require("jsonwebtoken");
const sign = `${process.env.JWT_SECRET}`;
const fecthUser = async (req, res, next) => {
  //Fetch user from the jwt token  and add id to req object
  const token = await req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Access denied" });
  }
  try {
    const data = jwt.verify(token, sign);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Access denied" });
    res.send({ error: error });
  }
};
module.exports = fecthUser;
