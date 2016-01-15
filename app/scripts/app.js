'use strict';

/**
 * @ngdoc overview
 * @name memeWorldApp
 * @description
 * # memeWorldApp
 *
 * Main module of the application.
 */
angular
  .module('memeWorldApp', [
//    'ngAnnotate',
    'ngAnimate',
    'ngRoute',
    'ngResource'
  ])
  .config(function($routeProvider) {
    $routeProvider
    .when('/meme', {
      templateUrl: 'views/meme-list.html',
      controller: 'memeListCtrl',
      controllerAs: 'memeList'
    })
    .when('/meme/new', {
      templateUrl: 'views/meme-create.html',
      controller: 'memeCreateCtrl',
      controllerAs: 'memeCreate'
    })
    .when('/meme/:id', {
      templateUrl: 'views/meme-detail.html',
      controller: 'memeDetailCtrl',
      controllerAs: 'memeDetail'
    })
    .when('/meme/:id/edit', {
      templateUrl: 'views/meme-edit.html',
      controller: 'memeEditCtrl',
      controllerAs: 'memeEdit'
    })
    .otherwise({
      redirectTo: '/meme'
    });
  }
);
