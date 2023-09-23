const path = require('path');
const express = require("express");
const router = express.Router();
router.get("/login", (req, res, next) => {
  res.send(`
  <form action="/login" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
  <input id="username" name="username" type="text" placeholder="Username">
  <button type="submit">Login</button>
</form>
  `);
});
router.post("/login", (req, res, next) => {
    const username = req.body.username;
  res.redirect('/');
});

module.exports = router;
