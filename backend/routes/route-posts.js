var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var Post = require('../models/model-post');

app.use(bodyParser.urlencoded({extended: true}));

router.route('/api/posts')
//get all posts
  .get((req, res) => {
    Post.findAll()
    .then((posts) => res.send(posts))
  })
  //create a post
  .post((req, res) => {
    var data = req.body
    Post.create({
      name: data.name,
      text: data.text
    }).then((data) => {
      res.send('post was created')
    })
  })
  //update post
router.route('/api/posts/:id')
.put((req, res)=>{
  var data = req.body
  var id = req.params.id
  Post.update({
    name: data.name,
    text: data.text
  },
  {where: {id: id}
}).then(() => res.send('post was updated.'))
})
.delete((req, res) =>{
  var id = req.params.id
  Post.destroy({
    where: {id: id}
  }).then(() => res.send('post was deleted!'))
})



module.exports = router
