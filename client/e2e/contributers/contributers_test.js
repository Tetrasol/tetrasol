/* global describe, beforeEach, it, browser, expect */
'use strict';

var ContributersPagePo = require('./contributers.po');

describe('Contributers page', function () {
  var contributersPage;

  beforeEach(function () {
    contributersPage = new ContributersPagePo();
    browser.get('/#/contributers');
  });

  it('should say ContributersCtrl', function () {
    expect(contributersPage.heading.getText()).toEqual('contributers');
    expect(contributersPage.text.getText()).toEqual('ContributersCtrl');
  });
});
