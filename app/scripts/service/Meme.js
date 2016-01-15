
"use strict";

angular.module('memeWorldApp')
  .factory('Meme', function ($resource) {
    return $resource('http://localhost:3001/meme/:memeId', {memeId: '@id'}, {
      'update': {method:'PUT'}
    });
  }
);