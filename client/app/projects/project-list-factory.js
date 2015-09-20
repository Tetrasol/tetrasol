(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name projects.factory:ProjectList
   *
   * @description
   *
   */
  angular
    .module('projects')
    .factory('ProjectList', ProjectList);

  function ProjectList() {
    var ProjectListBase = {};
    ProjectListBase.someValue = 'ProjectList';
    ProjectListBase.someMethod = function () {
      return 'ProjectList';
    };
    return ProjectListBase;
  }
}());
