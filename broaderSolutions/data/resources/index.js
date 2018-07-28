/**
 * BroaderSolution's Resources module.
 * @module bs/data/resources
 */


let _user = require('./user');


module.exports = {
  
  /**
   * The UserObject resource.
   */
  User: _user,
  
  /**
   * List of all available resources.
   */
  resourceList: [
    'User'
  ]
};