var Sequelize = require('sequelize');
var db = require('../db');

var Post = db.define('post', {
  name: Sequelize.STRING,
  text: Sequelize.STRING
})

Post.sync({});
module.exports = Post;
