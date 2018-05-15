var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  date_of_birth: String,
  created_at: String,
  updated_at: String
});

var User = mongoose.model("User", UserSchema);
module.exports = User;