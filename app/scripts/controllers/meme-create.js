"use strict";

angular.module('memeWorldApp')
  .controller('memeCreateCtrl', function($location, Meme) {
    this.meme = new Meme();

    this.addMeme = function() {
      console.log(this.meme);
      this.meme.$save(function() {
        $location.path('/meme');
      });
    };
  });