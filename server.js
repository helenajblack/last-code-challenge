//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./modules/routes/index');

//uses
app.use('/', index);
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

//globals
var port = process.env.PORT || 3939;

//spin up server
app.listen(port, function() {
  console.log('server up on:', port);
});

//home base route
app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});
