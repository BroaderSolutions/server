/**
 * The foundation for the user module.
 * @module data/resource/user
 */


/**
 * The name of the module.
 * @type {string}
 */
module.exports.moduleName = "user";

/**
 * Constructs a new User Object.
 * @constructor
 */
UserObject = function(_provideId, _displayName) {
  return {
    providerId: _provideId,
    displayName: _displayName
  }
};
module.exports = UserObject;


/**
 * The expected fields to be available on the UserObject.
 * @type {[string]}
 */
module.exports.fields = [
  'providerId',
  'displayName'
];