/* global element, by */
'use strict';

function ContributersPage() {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
}

module.exports = ContributersPage;
