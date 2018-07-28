/**
 * Created by GrantBroadwater on 7/28/18.
 */

let express = require( 'express' );
let router = express.Router();
let data = require('bs-data');

data.Resources.resourceList.forEach( function( resourceType ) {
  "use strict";
  
  
  router.get( '/' + resourceType, function ( req, res, next ) {
  
    res.end( 'get ' + resourceType );
    
  } );
  
  
  router.post( '/' + resourceType, function ( req, res, next ) {
    
    res.end( 'post ' + resourceType );
    
  } );
  
  
  router.delete( '/' + resourceType, function ( req, res, next ) {
    
    res.end( 'delete ' + resourceType );
    
  } );
  
} );

router.use( '/', function( req, res, next ) {
  "use strict";
  
  res.end( "Return api swaggg" );
  
} );

module.exports = router;
