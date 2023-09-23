const express = require('express')
const bodyparser = require('body-parser')
const loginRoutes = require('./routes/Login')
const chatRoutes = require('./routes/Chat');
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(loginRoutes)
app.use(chatRoutes)

app.listen(7000)