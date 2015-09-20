(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl() {
    var vm = this;
    vm.content = {
      name: 'Welcome To Tetrahedron Solutions',
      description: 'Hello, I am Alex I am the founder of Tetrahedron Solutions we are a group od developers that like' +
      'to program and contribute back to the community.'
    };
  }
}());
