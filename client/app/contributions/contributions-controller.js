(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name contributions.controller:ContributionsCtrl
   *
   * @description
   *
   */
  angular
    .module('contributions')
    .controller('ContributionsCtrl', ContributionsCtrl);

  function ContributionsCtrl() {
    var vm = this;
    vm.contributions = {
      name: 'Contributions',
      contribution: [
        {
          vendor: 'Open Stack',
          imageUrl: 'http://www.centerserv.com/wp-content/uploads/2014/07/openstack-logo-CenterServ-Server.png',
          description: 'OpenStack software controls large pools of compute, storage, and ' +
          'networking resources throughout a datacenter, managed through a dashboard or via the ' +
          'OpenStack API. OpenStack works with popular enterprise and open source technologies ' +
          'making it ideal for heterogeneous infrastructure.',
          link: 'https://www.openstack.org/'
        },
        {
          vendor: 'Modern Dev.Org',
          imageUrl: 'http://www.angelafloydschools.com/wp-content/uploads/placeholder-car1.png',
          description: 'Organization that manages distribution of knowledge.',
          link: 'https://github.com/ModernDev/moderndev-portal'
        },
        {
          vendor: 'ng-poly',
          imageUrl: 'http://www.angelafloydschools.com/wp-content/uploads/placeholder-car1.png',
          description: 'yeoman.io generator created by Dustin Specker',
          link: 'https://github.com/dustinspecker/generator-ng-poly'
        }
      ]
    };
  }
}());
