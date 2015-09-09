/* global element, by */
'use strict';

function ContributionsPage() {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
}

module.exports = ContributionsPage;
