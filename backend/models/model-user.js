var Sequelize = require('sequelize');
var db = require('../db');

var User = db.define('user',{
  userName: Sequelize.STRING,
  email: Sequelize.STRING
});

User.sync({});

module.exports = User;
