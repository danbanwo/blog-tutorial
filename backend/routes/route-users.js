var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();

var User = require('../models/model-user');

app.use(bodyParser.urlencoded({extended: true}));

router.route('/api/users')
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
router.route('/api/users/:id')
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

module.exports = router
