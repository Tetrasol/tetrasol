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

  function ProjectsCtrl() {
    var vm = this;
    vm.ctrlName = 'ProjectsCtrl';
  }
}());
