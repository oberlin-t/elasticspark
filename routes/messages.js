var express = require('express');
var router = express.Router();

/* GET  Message Page. */
router.get('/', function(req, res) {
  res.render('messages', { title: 'Messages' });
});

router.post('/', function(req, res) {
    res.render('messages', { title: 'Messages' });
    console.log(req.body.say);
})

module.exports = router;
