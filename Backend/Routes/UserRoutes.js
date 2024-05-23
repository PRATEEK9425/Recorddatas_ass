const express = require("express");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { usermodel } = require("../Models/UserModals");
require('dotenv').config()

const registerroutes = express.Router();
// register routes
registerroutes.post("/register", async (req, res) => {
    const { name,email,address,password,gender} = req.body;
    try {
      const Userpresent = await usermodel.find({ email });
  
      if (Userpresent.length > 0) {
        res.send("USER already Present");
      } else {
        const saltRounds = 8
        bcrypt.hash(password, saltRounds, function (err, Secure_password) {
          if (err) {
            console.log(err);
          } else {
            const user = new usermodel({
              name,
              email,
              address,
              password: Secure_password,
              gender,
            });
            user.save();
            res.send("User Registered Successfully");
          }
        });
      }
    } catch (err) {
      res.send("USER Present");
      console.log(err);
    }
  });

//   login routes

  registerroutes.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await usermodel.find({ email });
      const Hashed_password = user[0].password;
      if (user.length > 0) {
        bcrypt.compare(password, Hashed_password, (err, result) => {
          if (result) {
            const token = jwt.sign({ AssignmentApp: "Test"}, "Prateek");
            res.send({ msg: "Login Successful", token: token });
          } else {
            res.send("Wrong credentials");
          }
        });
      } else {
        res.send("Wrong Credentials");
      }
    } catch (err) {
      res.send("Wrong Credentials");
      console.log(err);
    }
  });

  module.exports={registerroutes}