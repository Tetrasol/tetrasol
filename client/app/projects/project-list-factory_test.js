/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ProjectList', function () {
  var factory;

  beforeEach(module('projects'));

  beforeEach(inject(function (ProjectList) {
    factory = ProjectList;
  }));

  it('should have someValue be ProjectList', function () {
    expect(factory.someValue).toEqual('ProjectList');
  });

  it('should have someMethod return ProjectList', function () {
    expect(factory.someMethod()).toEqual('ProjectList');
  });
});
