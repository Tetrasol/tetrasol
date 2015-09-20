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
    vm.image = '../images/user-avatar.jpg';
    vm.content = 'Hello, My name is Alex. I am the founder of Tetrahedron Solutions(Tsol). ' +
      'Ever since High School, I been fascinated with Software. The origin of the name is due to a project ' +
      'I did in High School. My professor asked our CS class to make image using Pov-ray(Graphics Design Tool). ' +
      'I made an array of tetrahedron objects and one best design in the class. The image stuck with me ' +
      'and I created this group. After receiving my degree in Computer Science, I been working to find a way ' +
      'of contributing back to the community. My goal with this group is to create a fun environment in ' +
      'which people that have a passion for Engineering unite and develop our ideas.';
  }
}());
