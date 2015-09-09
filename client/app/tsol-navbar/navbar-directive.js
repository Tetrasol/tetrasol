(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name client.directive:navbar
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="client">
       <file name="index.html">
        <navbar></navbar>
       </file>
     </example>
   *
   */
  angular
    .module('client')
    .directive('navbar', navbar);

  function navbar() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'tsol-navbar/navbar-directive.tpl.html',
      replace: false,
      controllerAs: 'navbar',
      controller: function () {
        var vm = this;
        vm.links = [
          {
            link: "Home",
            state: "home"
          },
          {
            link: "Projects",
            state: "project"
          },
          {
            link: "Contributers",
            state: "contributer"
          },
          {
            link: "Contributions",
            state: "contributions"
          },
          {
            link: "About Us",
            state: "about-us"
          }
        ];
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
