/**
 * Created by GrantBroadwater on 7/28/18.
 */

let express = require( 'express' );
let router = express.Router();
let data = require('bs-data');

data.Resources.resourceList.forEach( function( resourceType ) {
  "use strict";
  
  
  router.get( '/' + resourceType + '/:resourceId', function ( req, res, next ) {
    
    let resourceId = req.params.resourceId;
  
    res.end( 'get ' + resourceType + ' ' + resourceId );
    
  } );
  
  
  router.post( '/' + resourceType + '/:resourceId', function ( req, res, next ) {
  
    let resourceId = req.params.resourceId;
  
    res.end( 'post ' + resourceType + ' ' + resourceId );
    
  } );
  
  
  router.delete( '/' + resourceType + '/:resourceId', function ( req, res, next ) {
  
    let resourceId = req.params.resourceId;
  
    res.end( 'delete ' + resourceType + ' ' + resourceId );
    
  } );
  
} );

router.get( '/', function( req, res, next ) {
  "use strict";
  
  res.end( "API entrypoint" );
  
} );

module.exports = router;
