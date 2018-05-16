const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const mongodb_conn_module = require('./mongodbConnModule');
var db = mongodb_conn_module.connect();

var User = require("../models/user");

// Fetch all users
app.get('/users', (req, res) => {
  User.find({}, 'name email password date_of_birth created_at updated_at', function (error, users) {
    if (error) { console.error(error); }
    res.send({
      users: users
    })
  }).sort({_id:-1})
})

// Add new user
app.post('/add_user', (req, res) => {
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

// Update a user
app.put('/users/:id', (req, res) => {
  var db = req.db;
  User.findById(req.params.id, 'name email password date_of_birth created_at updated_at', function (error, user) {
    if (error) { console.error(error); }

    user.name = req.body.name
    user.email = req.body.email
    user.password = req.body.password
    user.date_of_birth = req.body.date_of_birth
    user.created_at = req.body.created_at
    user.updated_at = req.body.updated_at
    user.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

// Delete a user
app.delete('/users/:id', (req, res) => {
  var db = req.db;
  User.remove({
    _id: req.params.id
  }, function(err, user){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

// Fetch single user
app.get('/user/:id', (req, res) => {
  var db = req.db;
  User.findById(req.params.id, 'name email password date_of_birth created_at updated_at', function (error, user) {
    if (error) { console.error(error); }
    res.send(user)
  })
})

app.listen(process.env.PORT || 8081)
