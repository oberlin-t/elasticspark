var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
const messagecore = require("../js/messagecore")

router.use(cookieParser());

router.get('/', function(req, res) {    

  function loadPage(data){
      res.render('messages', { title: 'Messages', message: data });
  }
    
  if (fs.existsSync("js/pending/" + req.cookies.username + ".txt")){ 

    fs.readFile("js/pending/" + req.cookies.username + ".txt",'ascii', function (err, data) {

    if (err) {
      console.error(err);
      return;
    }

    loadPage(data);
    fs.unlinkSync("js/pending/" + req.cookies.username + ".txt")

    })
      
  }
           
  else {
      res.render('messages', { title: 'Messages', message: "" });
  }
    
})
    

router.post('/', function(req, res) {
    messagecore.storeMessage(req.body.reciever,req.cookies.username, req.body.text);
    res.render('messages', { title: 'Message Sent', message: "" });
})

module.exports = router;


