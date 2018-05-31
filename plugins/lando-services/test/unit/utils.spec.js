/*
 * Tests for lando-services:utils.
 * @file utils.spec.js
 */

'use strict';

// Setup chai.
const chai = require('chai');
const expect = chai.expect;
const os = require('os');
const path = require('path');
chai.should();

// Get env module to test
const utils = require('./../../lib/utils');

// This is the file we are testing
describe('lando-services.utils', () => {

  // addConfig method
  describe('#addConfig', () => {
    it('should have a completed spec!');
  });

  // addScript method
  describe('#addScript', () => {
    it('should have a completed spec!');
  });

  // buildVolume method
  describe('#buildVolume', () => {
    it('should have a completed spec!');
  });

  // filterBuildSteps method
  describe('#filterBuildSteps', () => {
    it('should have a completed spec!');
  });

  // normalizePath method
  describe('#normalizePath', () => {

    // It should return itself if prefixed with a variable like $LANDO_APP_ROOT
    it('should return itself if it starts with $', () => {

      // Get the command
      const local = ['$LANDO_APP_ROOT', 'directory'].join(path.sep);
      const base = path.sep + 'anything';
      const normalized = utils.normalizePath(local, base);

      // Assert the things
      expect(normalized).to.equal(local);

    });

    // It should return itself if local is one of excludes
    it('should return itself if it is one of the excludes', () => {

      // Get the command
      const local = 'nfsmount';
      const base = path.sep + 'anything';
      const excludes = ['nfsmount'];
      const normalized = utils.normalizePath(local, base, excludes);

      // Assert the things
      expect(normalized).to.equal(local);

    });

    // It should return itself if local is an absolute path
    it('should return itself if it is an absolute path', () => {

      // Get the command
      const local = [os.tmpdir(), 'test'].join(path.sep);
      const base = path.sep + 'anything';
      const normalized = utils.normalizePath(local, base);

      // Assert the things
      expect(normalized).to.equal(local);

    });

    // It should return itself if local is an absolute path
    it('should return an absolute path resolved by base if it is a relative path', () => {

      // Get the command
      const local = ['.', '..', 'thing'].join(path.sep);
      const base = path.sep + ['anything', 'thing'].join(path.sep);
      const normalized = utils.normalizePath(local, base);

      // Assert the things
      expect(normalized).to.equal(path.sep + ['anything', 'thing'].join(path.sep));
      expect(path.isAbsolute(normalized)).to.equal(true);

    });


  });

  // setEntrypoint method
  describe('#setEntrypoint', () => {
    it('should have a completed spec!');
  });

});
