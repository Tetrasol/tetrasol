(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name client.directive:header
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="client">
       <file name="index.html">
        <header></header>
       </file>
     </example>
   *
   */
  angular
    .module('client')
    .directive('header', header);

  function header() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: '/tsol-header/header-directive.tpl.html',
      replace: false,
      controllerAs: 'header',
      controller: function ($mdSidenav) {
        var vm = this;
        vm.navbarToggle = function () {
          $mdSidenav('left').toggle();
        };
        vm.name = 'Tetrahedron Solutions';
      },
      link: function () {
      }
    };
  }
}());
