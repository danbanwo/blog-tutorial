var express = require('express');
var router =  express.Router();
var app = express();
var bodyParser = require('body-parser')
var Comment = require('../models/model-comment')

//using app.use to espesify the url
//and using 'router' for diff http verbs
app.use(bodyParser.urlencoded({extended: true}))

//get all commets
router.route('/api/comments')
  .get((req, res) => {
    Comment.findAll()
    .then((comments) => {
      res.send(comments)
  })
})
// creating a comments
//data will return an object and we need to extract some of it content
.post((req, res) => {
  var data = req.body
  Comment.create({
    comment: data.comment,
    user: data.user
  }).then(
    res.send('comment was created')
  )
})


module.exports = router
