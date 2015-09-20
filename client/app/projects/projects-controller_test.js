/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ProjectsCtrl', function () {
  var ctrl;

  beforeEach(module('projects'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ProjectsCtrl');
  }));

  it('should have ctrlName as ProjectsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ProjectsCtrl');
  });
});
