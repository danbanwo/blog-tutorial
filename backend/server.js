//requaring a module
var express = require('express');
var sequelize = require('sequelize');
var db = require('./db');
var bodyParser = require('body-parser');
//importing router with a instance of express
var app = express();
var path = require('path');
var rootPath = path.join(__dirname, '..');

//import models
var Comment = require('./models/model-comment')
var Post = require('./models/model-post')
var User = require('./models/model-user')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${rootPath}`))

//---------USER ENDPOINTS------------//
app.route('/api/users')
  .get((req, res) =>{
  User.findAll()
  .then((data) => res.send(data))
})
  .post((req, res) => {
    var data = req.body
    User.create({
      userName: data.userName,
      email: data.email
    }).then(() => res.send('user was created'))
  })

app.route('/api/users/:id')
  .put((req, res) => {
    var id = req.params.id
    var data = req.body
    User.update({
      userName: data.userName,
      email: data.email
    },
    {where: {id: id}})
    .then(() => res.send('user was updated'))
  })
  .delete((req, res) => {
    var id = req.params.id
    User.destroy({
      where: {id: id}
    }).then(() => res.send('user was deleted!'))
  })

  //---------POST ENDPOINTS------------//
  app.route('/api/posts')
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
  app.route('/api/posts/:id')
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

  //---------COMMENTS ENDPOINTS------------//
  //get all commets
  app.route('/api/comments')
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
  app.route('/api/comments/:id')
    .put((req, res) => {
      var data = req.body
      var id = req.params.id
      Comment.update({
        comment: data.comment,
        user: data.user
      }, {where: {id: id}}).then(
        res.send('comment was updated')
      )
    })
    .delete((req, res) => {
      var data = req.body
      var id = req.params.id
      Comment.destroy({where: {id: id}})
      .then(res.send('comment was deleted'))
    })

    // app.use(express.static('./public'));
    // app.get('*', (req, res){
    //   res.sendFile(path.join(__dirname, './public/index.html'))
    // })

//---------HANDLES ALL OTHER NON-API ROUTES-----///
app.get('/*', function(req, res){
  res.sendFile(`${rootPath}/index.html`)
})

app.listen(3000, function(){
  console.log('listening on  port 3000')
})
