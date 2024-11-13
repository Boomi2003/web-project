const mongoose = require('mongoose');

const EmployeeListSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    mobile: String,
    designation: String,
    gender: String,
    course: String,
    imgUpload: String
});

const ElistModel= mongoose.model("Employee", EmployeeListSchema);

module.exports=ElistModel