"use strict";

angular.module('memeWorldApp')
  .controller('memeDetailCtrl', function($routeParams,
                                         Meme) {
    this.meme = Meme.get({memeId: $routeParams.id});
  });