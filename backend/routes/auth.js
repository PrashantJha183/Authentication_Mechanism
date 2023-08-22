const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");
const sign = `${process.env.JWT_SECRET}`;

//ROUTE 1: Create a user using POST method /api/auth/createuser   No login required
router.post(
  "/createuser",

  // Perfroming validation
  [
    body("name").isLength({ min: 3 }),
    body("email").trim().isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //If there are errors then return errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
      // return res.send(`Hello, ${req.body.name}!`);
      return res.status(400).send({ errors: result.array() });
    }

    //Validating user through email by fetching email from database and verifying that user exist or not
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        res.json({
          error: "User with this email already exist",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const securePassword = await bcrypt.hash(req.body.password, salt);

      //Inserting data into database
      user = await User.create({
        name: req.body.name,
        password: securePassword,
        email: req.body.email,
      });
      // return res.json(user);

      // sending payload for jwtToken
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, sign);
      //Using JWTToken sign
      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

//ROUTE 2: Authenticating a user using POST method /api/auth/login   login required
router.post(
  "/login",

  // Perfroming validation
  [body("email").isEmail(), body("password").exists()],
  async (req, res) => {
    //If there are errors then return errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
      // return res.send(`Hello, ${req.body.name}!`);
      return res.status(400).send({ errors: result.array() });
    }

    //login credentials enter by the user
    const { email, password } = req.body;

    try {
      //fetching user from database and verifying th user
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please enter valid login credentials" });
      }

      //Comparing password which was entered by the user from the password which was stored in the database
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please enter valid login credentials" });
      }

      //sending payload for jwtToken
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, sign);
      //Using JWTToken sign
      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

//ROUTE 3: Get loggedin user details using POST method /api/auth/getuser   login required
router.post("/getuser", fetchUser, async (res, req) => {
  try {
    userID = req.user.id;
    const user = await User.findById(userID).select("-password");
    req.send(user);
  } catch (error) {
    console.error(error.message);
    // res.status(500).send("Some error occured");
  }
});

module.exports = router;
