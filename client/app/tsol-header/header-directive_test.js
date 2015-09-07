/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('header', function () {
  var scope
    , element;

  beforeEach(module('client', '/header-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<header></header>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().header.name).toEqual('header');
  });
});
