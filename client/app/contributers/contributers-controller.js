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

  function ContributersCtrl() {
    var vm = this;
    vm.contributers = [
      {
        name: 'German A. Rivera De La Torre',
        role: 'Software Engineer',
        avatar: 'https://avatars0.githubusercontent.com/u/4713614?v=3&s=460',
        github: 'https://github.com/gerrive'
      }
    ];
  }
}());
