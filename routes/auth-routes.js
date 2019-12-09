
const express = require("express");
const router = express.Router();

// User model
const User = require("../models/User");

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const { name, email, password } = req.body;

  if (email === "" || password === "") {
    return res.render("auth/signup", { message: "Indicate an email and password" });
  }

  User.findOne({ email })
    .then(user => {
      if (user !== null) {
        return res.render("auth/signup", { message: "The username already exists" });
      }
    })
    .catch(error => {
      next(error);
    });
    
  User.register({ email, name }, password)
    .then(userCreated => {
      console.log(userCreated);
      res.redirect("/login");
    })
    .catch(error => {
      next(error);
    })
});

module.exports = router;

