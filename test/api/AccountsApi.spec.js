/**
 * Saasgrids CRM grid
 * Saasgrids CRM grid
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@saasgrids.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.crms);
  }
}(this, function(expect, crms) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new crms.AccountsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AccountsApi', function() {
    describe('createAccount', function() {
      it('should call createAccount successfully', function(done) {
        //uncomment below and update the code to test createAccount
        //instance.createAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAccountById', function() {
      it('should call deleteAccountById successfully', function(done) {
        //uncomment below and update the code to test deleteAccountById
        //instance.deleteAccountById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountById', function() {
      it('should call getAccountById successfully', function(done) {
        //uncomment below and update the code to test getAccountById
        //instance.getAccountById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountFilters', function() {
      it('should call getAccountFilters successfully', function(done) {
        //uncomment below and update the code to test getAccountFilters
        //instance.getAccountFilters(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountsByFilter', function() {
      it('should call getAccountsByFilter successfully', function(done) {
        //uncomment below and update the code to test getAccountsByFilter
        //instance.getAccountsByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllAccounts', function() {
      it('should call getAllAccounts successfully', function(done) {
        //uncomment below and update the code to test getAllAccounts
        //instance.getAllAccounts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAccountById', function() {
      it('should call updateAccountById successfully', function(done) {
        //uncomment below and update the code to test updateAccountById
        //instance.updateAccountById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));