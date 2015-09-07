(function () {
  'use strict';

  angular
    .module('client')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
