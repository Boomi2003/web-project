"use strict";

var mongoose = require('mongoose');

var EmployeeListSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  mobile: String,
  designation: String,
  gender: String,
  course: String,
  imgUpload: String
});
var ElistModel = mongoose.model("Employee", EmployeeListSchema);
module.exports = ElistModel;
//# sourceMappingURL=EmployeeList.dev.js.map
