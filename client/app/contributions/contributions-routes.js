(function () {
  'use strict';

  angular
    .module('contributions')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('contributions', {
        url: '/contributions',
        templateUrl: 'contributions/contributions.tpl.html',
        controller: 'ContributionsCtrl',
        controllerAs: 'contributions'
      });
  }
}());
