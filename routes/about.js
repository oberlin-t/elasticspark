var express = require('express');
var router = express.Router();

/* GET cat pics. */
router.get('/', function(req, res) {
  res.render('about', { title: 'About' });
});

module.exports = router;
