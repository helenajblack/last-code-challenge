var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/messageboard');

var messagesSchema = new mongoose.Schema({
  username: String,
  message: String,
}); // end schema

var messages = mongoose.model('messages', messagesSchema);

router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

router.get('/', function(req, res) {
  console.log('/messages get call');
  messages.find().then(function(results) {
    res.send(results);
  }); // end find
}); // end /listings get

router.post('/messages', function(req, res) {
  console.log('req.body.name: ' + req.body.username);
  // retrieved the req.body
  // putting it into an object to be saved in the db
  var messageToAdd = {
    username: req.body.username,
    location: req.body.location
  };
  // create new record

  var newMessage = messages(messageToAdd);
  newMessage.save(function(err) {
    res.status(200).json(messageToAdd);
  });
});

module.exports = router;
