/* global describe, beforeEach, it, browser, expect */
'use strict';

var ContributionsPagePo = require('./contributions.po');

describe('Contributions page', function () {
  var contributionsPage;

  beforeEach(function () {
    contributionsPage = new ContributionsPagePo();
    browser.get('/#/contributions');
  });

  it('should say ContributionsCtrl', function () {
    expect(contributionsPage.heading.getText()).toEqual('contributions');
    expect(contributionsPage.text.getText()).toEqual('ContributionsCtrl');
  });
});
