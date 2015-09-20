/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ContributersCtrl', function () {
  var ctrl;

  beforeEach(module('contributers'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ContributersCtrl');
  }));

  it('should have ctrlName as ContributersCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ContributersCtrl');
  });
});
