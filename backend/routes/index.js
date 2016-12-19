
var User = require('./route-users')
var Comment = require('./route-comments')
var Post = require('./route-posts')



module.exports = function(req, res) {
  routes: {
    User,
    Comment,
    Post
  }
}
