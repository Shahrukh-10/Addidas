const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
port: 465,
secure: true, // use TLS
//create a .env file and define the process.env variables 
auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
},
});

const createJsonWebToken = (_id) => {
  return jwt.sign(_id, process.env.SECRET);
};

// API FOR USER SIGNUP

router.post(
  "/signup",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
    body("username").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
      const { username, email, password } = req.body;
      let user = await User.findOne({ email: email });
      console.log(email);
      if (user) {
        return res
          .status(400)
          .json({ success, error: "User with this email already exist" }
          );
      }
      const salt = await bcrypt.genSalt(10);
      const securePassword = await bcrypt.hash(password, salt);
      user = await User.create({
        username,
        email,
        password: securePassword,
      });
      const data = {
        user: { id: user._id },
      };
      console.log(process.env.PORT);
      const token = createJsonWebToken(data);
      success = true;
      res.send({ success, token });
    } catch (e) {
      res.status(500).send({ e });
    }
  }
);

// API FOR USER LOGIN
router.post(
  "/login",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
      const { email, password } = req.body;
      let user = await User.findOne({ email: email });
      if (!user) {
        return res.status(400).json({ success, error: "User doesnot exitst" });
      }
      const comparePasssword = await bcrypt.compare(password, user.password);
      if (!comparePasssword) {
        return res.status(400).json({
          success,
          error: "please try to login with correct credentials",
        });
      }
      const data = {
        user: { id: user._id },
      };
      const token = createJsonWebToken(data);
      
      success = true;
      res.send({ success, token });
    } catch (error) {
      res.status(500).send({ error });
    }
  }
);

// API FOR UPDATE PROFILE
router.post(
  "/updateProfile",
  [body("email").isEmail()],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
      const { email , firstName , mobileNumber } = req.body;
      let user = await User.findOne({ email: email });
      if (!user) {
        return res.status(400).json({ success, error: "User doesnot exitst" });
      }
      const update = {firstName:firstName , mobileNumber:mobileNumber}
      const filter = {email : email}
      const updateDocument = await User.findOneAndUpdate(filter,update);
      
      console.log(updateDocument);
      
      success = true;
      res.send({ success, token });
    } catch (error) {
      res.status(500).send({ error });
    }
  }
);

module.exports = router;

      // const mailData = {
        // from: process.env.EMAIL,
        // to:  email ,
        // subject: user.username + " , Successfully logged in .",
        // text: "That was easy!",
        // html: "<b>Hey there! </b> <br> Successfully logged in . <br/>",
      // };
      // transporter.sendMail(mailData, function (err, info) {
        // console.log("mail");
        // if (err) console.log(err);
        // else console.log(info);
      // });