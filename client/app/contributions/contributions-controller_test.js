/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ContributionsCtrl', function () {
  var ctrl;

  beforeEach(module('contributions'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ContributionsCtrl');
  }));

  it('should have ctrlName as ContributionsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ContributionsCtrl');
  });
});
