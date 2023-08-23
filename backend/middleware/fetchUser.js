const jwt = require("jsonwebtoken");
const sign = `${process.env.JWT_SECRET}`;
const fecthUser = async (req, res, next) => {
  //Fetch user from the jwt token  and add id to req object (on header)
  const token = await req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Access denied" });
  }
  try {
    //For verification of authentication token we need two parameter 1. "token which is generated after logged in by the user" 2."Signature"
    const data = jwt.verify(token, sign);
    res.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Access denied" });
    res.send({ error: error });
  }
};
module.exports = fecthUser;
