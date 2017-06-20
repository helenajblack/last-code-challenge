//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./modules/routes/index');
var messages = require('./modules/routes/messages.js');

//uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', index);
app.use('/messages', messages);
app.use(express.static('public'));

//globals
var port = process.env.PORT || 3939;

//spin up server
app.listen(port, function() {
  console.log('server up on:', port);
});

//get
app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});
