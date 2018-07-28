/**
 * Created by GrantBroadwater on 7/28/18.
 */

let express = require( 'express' );
let router = express.Router();

router.use( '/', function( req, res, next ) {
  "use strict";
  
  res.end( "Return api swag" );
  
} );

module.exports = router;
