var express = require('express');
var router = express.Router();

/* GET cat pics. */
router.get('/', function(req, res, next) {
  res.render('cats', { title: 'Cat Pics' });
});

module.exports = router;
