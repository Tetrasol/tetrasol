(function () {
  'use strict';

  angular
    .module('projects')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('projects', {
        url: '/projects',
        templateUrl: 'projects/projects.tpl.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      });
  }
}());
