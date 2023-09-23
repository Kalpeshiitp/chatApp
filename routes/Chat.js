const path = require("path");
const express = require("express");
// const data = require('./data')
const fs = require('fs')
const router = express.Router();

router.get("/", (req, res, next) => {
fs.readFile("username.txt",(err,data)=>{
    if(err){
        data = "data is not found"
    }
    res.send(`${data} <form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"
    method="POST">
    <input id="message" name="message" type="text" placeholder="message">
     <input type="hidden" name="username" id="username">
     <button type="submit">Send</button>
   </form>`);
  });  
})
router.post("/", (req, res, next) => {
  fs.writeFile('username.txt',`${req.body.username}: ${req.body.message}\n`,{flag: 'a'}, (err)=>{
    err ? console.log(err) : res.redirect('/')
  })
});

module.exports = router;