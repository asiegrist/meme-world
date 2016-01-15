require('./db');

var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();
var server = http.createServer(app);


app.set('port', process.env.PORT || 3001);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.render('index');
});

//JSON API
app.get('/meme', routes.index);
app.get('/meme/:id', routes.detail);
app.post('/meme', routes.create);
app.delete('/meme/:id', routes.destroy);

server.listen(app.get('port'), function() {
  console.log('Express server listening on http://localhost:%d/', app.get('port'));
});