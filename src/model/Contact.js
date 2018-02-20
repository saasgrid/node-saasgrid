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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Customfield'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Customfield'));
  } else {
    // Browser globals (root is window)
    if (!root.crms) {
      root.crms = {};
    }
    root.crms.Contact = factory(root.crms.ApiClient, root.crms.Customfield);
  }
}(this, function(ApiClient, Customfield) {
  'use strict';




  /**
   * The Contact model module.
   * @module model/Contact
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Contact</code>.
   * @alias module:model/Contact
   * @class
   */
  var exports = function() {
    var _this = this;




























  };

  /**
   * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Contact} obj Optional instance to populate.
   * @return {module:model/Contact} The populated <code>Contact</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('jobTitle')) {
        obj['jobTitle'] = ApiClient.convertToType(data['jobTitle'], 'String');
      }
      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
      if (data.hasOwnProperty('department')) {
        obj['department'] = ApiClient.convertToType(data['department'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('workNumber')) {
        obj['workNumber'] = ApiClient.convertToType(data['workNumber'], 'String');
      }
      if (data.hasOwnProperty('mobileNumber')) {
        obj['mobileNumber'] = ApiClient.convertToType(data['mobileNumber'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('zipcode')) {
        obj['zipcode'] = ApiClient.convertToType(data['zipcode'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('salesAccountId')) {
        obj['salesAccountId'] = ApiClient.convertToType(data['salesAccountId'], 'String');
      }
      if (data.hasOwnProperty('leadSourceId')) {
        obj['leadSourceId'] = ApiClient.convertToType(data['leadSourceId'], 'String');
      }
      if (data.hasOwnProperty('ownerId')) {
        obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
      }
      if (data.hasOwnProperty('hasAuthority')) {
        obj['hasAuthority'] = ApiClient.convertToType(data['hasAuthority'], 'Boolean');
      }
      if (data.hasOwnProperty('doNotDisturb')) {
        obj['doNotDisturb'] = ApiClient.convertToType(data['doNotDisturb'], 'Boolean');
      }
      if (data.hasOwnProperty('timeZone')) {
        obj['timeZone'] = ApiClient.convertToType(data['timeZone'], 'String');
      }
      if (data.hasOwnProperty('facebook')) {
        obj['facebook'] = ApiClient.convertToType(data['facebook'], 'String');
      }
      if (data.hasOwnProperty('twitter')) {
        obj['twitter'] = ApiClient.convertToType(data['twitter'], 'String');
      }
      if (data.hasOwnProperty('linkedin')) {
        obj['linkedin'] = ApiClient.convertToType(data['linkedin'], 'String');
      }
      if (data.hasOwnProperty('companyWebsite')) {
        obj['companyWebsite'] = ApiClient.convertToType(data['companyWebsite'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], [Customfield]);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {String} jobTitle
   */
  exports.prototype['jobTitle'] = undefined;
  /**
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;
  /**
   * @member {String} department
   */
  exports.prototype['department'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} workNumber
   */
  exports.prototype['workNumber'] = undefined;
  /**
   * @member {String} mobileNumber
   */
  exports.prototype['mobileNumber'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {String} zipcode
   */
  exports.prototype['zipcode'] = undefined;
  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {String} salesAccountId
   */
  exports.prototype['salesAccountId'] = undefined;
  /**
   * @member {String} leadSourceId
   */
  exports.prototype['leadSourceId'] = undefined;
  /**
   * @member {String} ownerId
   */
  exports.prototype['ownerId'] = undefined;
  /**
   * @member {Boolean} hasAuthority
   */
  exports.prototype['hasAuthority'] = undefined;
  /**
   * @member {Boolean} doNotDisturb
   */
  exports.prototype['doNotDisturb'] = undefined;
  /**
   * @member {String} timeZone
   */
  exports.prototype['timeZone'] = undefined;
  /**
   * @member {String} facebook
   */
  exports.prototype['facebook'] = undefined;
  /**
   * @member {String} twitter
   */
  exports.prototype['twitter'] = undefined;
  /**
   * @member {String} linkedin
   */
  exports.prototype['linkedin'] = undefined;
  /**
   * @member {String} companyWebsite
   */
  exports.prototype['companyWebsite'] = undefined;
  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * @member {Date} updatedAt
   */
  exports.prototype['updatedAt'] = undefined;
  /**
   * @member {Array.<module:model/Customfield>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));

