/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('navbar', function () {
  var scope
    , element;

  beforeEach(module('client', '/navbar-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<navbar></navbar>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().navbar.name).toEqual('navbar');
  });
});
