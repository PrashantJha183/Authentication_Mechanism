const express = require("express");
const User = require("../models/User");
const Notes = require("../models/Notes");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");
const sign = `${process.env.JWT_SECRET}`;
const fetchAllBlogs = require("./fetchAllBlogs");
const fetchLatestBlogs = require("./fetchLatestBlogs");

//ROUTE 1: Create a user using POST method /api/auth/createuser   No login required
router.post(
  "/createuser",

  // Perfroming validation
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    //If there are errors while performing any validation then return errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send({ errors: result.array() });
    }

    //Validating user through email by fetching email from database and verifying that user exist or not
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        let success = false;
        res.json({ succ, error: "User with this email already exist" });
      }

      //Password Hasingh and adding salt
      const salt = await bcrypt.genSalt(10);
      const securePassword = await bcrypt.hash(req.body.password, salt);

      //Inserting valid user data into database
      user = await User.create({
        name: req.body.name,
        password: securePassword,
        email: req.body.email,
      });

      // sending payload for jwtToken
      const data = {
        user: {
          id: user.id,
        },
      };

      //Using JWTToken sign
      const authToken = jwt.sign(data, sign);
      let success = true;

      res.json({ success, authToken });
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
  [body("email", "Enter a valid email").isEmail(), body("password").exists()],
  async (req, res) => {
    let success = false;
    //If there are errors while performing any validation then return errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send({ errors: result.array() });
    }

    //login credentials enter by the user
    const { email, password, role } = req.body;

    try {
      //fetching user from database and verifying the valid user
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Please enter valid login credentials" });
      }

      //Comparing password which was entered by the user from the password which was already been stored in the database
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Please enter valid login credentials" });
      }

      //sending payload for jwtToken
      const dataid = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(dataid, sign);
      success = true;

      //Fetchin user role from database
      const role = {
        user: {
          role: user.role,
        },
      };
      console.log(role);

      // let userId = await User.findById().pretty(id);
      // console.log(userId);
      // const UserId = await User.findById(user._id);
      // console.log(UserId);

      //Using JWTToken sign

      res.json({ success, authToken, role, dataid });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

//ROUTE 3: Get loggedin user details using POST method /api/auth/getuser   login required
// router.post("/getuser", fetchUser, async (res, req) => {
//   try {
//     //fetching user id through "fetchUser" middleware
//     userID = req.user.id;

//     //Just finding user through its id by diselecting password
//     const user = await User.findById(userID).select("-password");

//     req.send(user);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Some error occured");
//   }
// });

router.post("/getAllID", async (req, res) => {
  console.log("thid id runningd");
  const { id } = req.body;
  const UserId = await User.find(id);
  res.json(await fetchAllBlogs(req, res, UserId[0].id));
  // for (i = 0; i < UserId.length; i++) {
  //   //  console.log(UserId[i].role);

  //   if (UserId[i].role === "admin") {
  //     res.json(await fetchAllBlogs(req, res, UserId[i].id));
  //     break;
  //     // console.log(UserId[i].id);
  //   }
  //   break;
  // }
});

router.post("/getOneID", async (req, res) => {
  const { id } = req.body;
  const single = await User.find(id);
  for (i = 0; i < single.length; i++) {
    res.json(single[i].id);
    fetchLatestBlogs(single[i].id);
    break;
  }
});

module.exports = router;
