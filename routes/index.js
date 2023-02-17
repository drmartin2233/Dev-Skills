var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log("listening")
  res.render('index', { title: 'Express Skill' });
  // res.send("something")
});

module.exports = router;
