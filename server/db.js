var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var url = 'mongodb://meme-world.cloudapp.net:8080/meme';

var Meme = new Schema({
  title : String,
  stars : Number
});

mongoose.model('Meme', Meme);
mongoose.connect(url);