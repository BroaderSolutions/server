let express = require('express');
let router = express.Router();
let BroaderSolutions = require('broader-solutions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: BroaderSolutions.Constants.title });
});

module.exports = router;
