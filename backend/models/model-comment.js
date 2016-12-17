var Sequelize = require('sequelize');
var db = require('../db.js')


var Comment = db.define('comment', {
  comment: Sequelize.STRING,
  user: Sequelize.STRING
})

Comment.sync({});

module.exports = Comment
