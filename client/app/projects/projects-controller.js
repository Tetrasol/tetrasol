(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name projects.controller:ProjectsCtrl
   *
   * @description
   *
   */
  angular
    .module('projects')
    .controller('ProjectsCtrl', ProjectsCtrl);

  function ProjectsCtrl($http) {
    var vm = this;
    vm.ctrlName = 'ProjectsCtrl';
    $http.get('https://api.github.com/orgs/TetrahedronSolutions/repos')
      .then(function (response) {
        vm.projects = response.data;
      });
  }
}());
