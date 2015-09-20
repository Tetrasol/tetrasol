(function () {
  'use strict';

  /* @ngdoc object
   * @name client
   * @description
   *
   */
  angular
    .module('client', [
      'ngMaterial',
      'ui.router',
      'home',
      'contributions',
      'contributers',
      'aboutUs',
      'projects'
    ]);
}());
