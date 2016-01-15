"use strict";

angular.module('memeWorldApp')
  .controller('memeEditCtrl', function($location,
                                       $routeParams,
                                       Meme) {
    this.meme = Meme.get({memeId: $routeParams.id});
    console.log(this.meme);

    this.updateMeme = function() {
      this.meme.$update(function() {
        $location.path('/meme');
      });
    };

    this.deleteMeme = function() {
      this.meme.$remove(function(){
        $location.path('/meme');
      });
    };
  });