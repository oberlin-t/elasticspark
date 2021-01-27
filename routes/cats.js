var express = require('express');
var router = express.Router();

/* GET cat pics. */
router.get('/', function(req, res) {
  res.render('cats', { title: 'Cat Pics' });
});

module.exports = router;
