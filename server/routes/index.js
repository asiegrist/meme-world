var mongoose = require('mongoose');
var Meme = mongoose.model('Meme');


exports.index = function (req, res) {
  Meme.find(function (err, memes) {
    if(err) {
      return res.status(204).end();
    } else {
      return res.status(200).json(memes);
    }
  });
};

exports.detail = function (req, res) {
  Meme.findById(req.params.id, function (err, meme) {
    if(err || meme == null) {
      return res.status(204).end();
    } else {
      return res.status(200).json(meme);
    }
  });
};

exports.create = function (req, res) {
  console.log(req);
  new Meme({
    title: req.body.title,
    stars: req.body.stars
  }).save(function (err, meme) {
    if (err) {
      return res.status(500).json({error: 'Le film a déjà été ajouté.'});
    } else {
      return res.status(201).json(meme);
    }
  })
};

exports.destroy = function (req, res) {
  Meme.findById(req.params.id, function (err, meme) {
    if (!meme) {
      return res.status(204).end();
    } else {
      meme.remove(function (err, meme) {
        if (err) {
          return res.status(204).end();
        } else {
          return res.status(200).end();
        }
      });
    }
  });
};

exports.edit = function (req, res) {
  Meme.find(function (err, meme) {

  });
};
