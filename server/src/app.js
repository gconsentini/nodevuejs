const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var User = require("../models/user");

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/users');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

// Add new post
app.post('/user', (req, res) => {
  var db = req.db;
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var date_of_birth = req.body.date_of_birth;
  var created_at = req.body.created_at;
  var updated_at = req.body.updated_at;
  var new_user = new User({
    name: name,
    email: email,
    password: password,
    date_of_birth: date_of_birth,
    created_at: created_at,
    updated_at: updated_at
  })

  new_user.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'User saved successfully!'
    })
  })
})

app.get('/users', (req, res) => {
    res.send(
      [{
        name: "Gustavo Consentini",
        email: "gustavoconsentini@gmail.com",
        password: "1234",
        date_of_birth: "21/12/1990",
        created_at: "15/05/2018",
        updated_at: "15/05/2018"
      }]
    )
  })

app.listen(process.env.PORT || 8081)