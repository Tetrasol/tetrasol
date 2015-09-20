/* global describe, beforeEach, it, browser, expect */
'use strict';

var ProjectsPagePo = require('./projects.po');

describe('Projects page', function () {
  var projectsPage;

  beforeEach(function () {
    projectsPage = new ProjectsPagePo();
    browser.get('/#/projects');
  });

  it('should say ProjectsCtrl', function () {
    expect(projectsPage.heading.getText()).toEqual('projects');
    expect(projectsPage.text.getText()).toEqual('ProjectsCtrl');
  });
});
