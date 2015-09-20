(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name contributers.controller:ContributersCtrl
   *
   * @description
   *
   */
  angular
    .module('contributers')
    .controller('ContributersCtrl', ContributersCtrl);

  function ContributersCtrl($http) {
    var vm = this;
    $http.get('https://api.github.com/orgs/TetrahedronSolutions/members')
      .then(function (response) {
        vm.contributers = response.data;
      });
  }
}());
