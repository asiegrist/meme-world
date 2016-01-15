"use strict";

angular.module('memeWorldApp')
  .controller('memeListCtrl', function($location,
                                       Meme) {
    this.memes = Meme.query();

    this.memeDetail = function(index){
      $location.path('/meme/' + this.memes[index]._id);
    };
  });