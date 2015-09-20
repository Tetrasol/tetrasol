/**
 * Created by gerrive on 9/5/15.
 */
(function () {
  'use strict';

  angular.module('client').config(themes);

  function themes($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('red')
      .accentPalette('red')
      .warnPalette('red')
      .backgroundPalette('grey');
  }
}());
