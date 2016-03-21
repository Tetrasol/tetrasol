(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name aboutUs.controller:AboutUsCtrl
   *
   * @description
   *
   */
  angular
    .module('aboutUs')
    .controller('AboutUsCtrl', AboutUsCtrl);

  function AboutUsCtrl() {
    var vm = this;
    vm.ctrlName = 'AboutUsCtrl';
    vm.content = 'We are open-source group of developers. Sharing our ideas' +
                 'thoughts of the current industry, technology, etc.';
  }
}());
