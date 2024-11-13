"use strict";

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});
var EmployeeModel = mongoose.model("users", UserSchema);
module.exports = EmployeeModel;
//# sourceMappingURL=User.dev.js.map
