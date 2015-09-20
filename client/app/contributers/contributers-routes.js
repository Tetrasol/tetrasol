(function () {
  'use strict';

  angular
    .module('contributers')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('contributers', {
        url: '/contributers',
        templateUrl: 'contributers/contributers.tpl.html',
        controller: 'ContributersCtrl',
        controllerAs: 'contributers'
      });
  }
}());
