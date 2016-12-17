var Sequelize = require('sequelize');
var db = require('../db');

//import models:
var Comment = require('./model-comment')
var Post = require('./model-post')
var User = require('./model-user')

module.exports = {
  Comment: Comment,
  Post: Post,
  User: User
}
