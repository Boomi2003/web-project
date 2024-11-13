"use strict";

var express = require("express");

var mongoose = require("mongoose");

var cors = require("cors");

var EmployeeModel = require("./models/User");

var ElistModel = require("./models/EmployeeList");

var app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/User").then(function () {
  return console.log('mongodb connected');
});
app.post("/login", function (req, res) {
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password;
  EmployeeModel.findOne({
    email: email
  }).then(function (user) {
    console.log(user);

    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});
app.post("/register", function (req, res) {
  EmployeeModel.create(req.body).then(function (employees) {
    return res.json(employees);
  })["catch"](function (err) {
    return res.json(err);
  });
});
app.post('/employeelist', function _callee(req, res) {
  var email, existingUser;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          email = req.body.title;
          _context.next = 3;
          return regeneratorRuntime.awrap(ElistModel.findOne(email));

        case 3:
          existingUser = _context.sent;

          if (existingUser) {
            res.send('already exists');
          } else {
            ElistModel.create(req.body).then(function (employees) {
              return res.status(201).json(employees);
            })["catch"](function (err) {
              return res.status(500).json(err);
            });
          }

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.get('/employeelist', function _callee2(req, res) {
  var employees;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(ElistModel.find({}));

        case 3:
          employees = _context2.sent;
          console.log(employees);
          res.send(employees);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.error('Err fetching', _context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // app.get("/username",async(req,res)=>{
//     console.log(req.user.id)
// })

app.listen(3001, function () {
  console.log("server is running");
});
//# sourceMappingURL=index.dev.js.map
