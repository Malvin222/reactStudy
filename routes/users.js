var express = require('express');
var router = express.Router();

/* Post users listing. */
router.post('/', function(req, res, next) {
  res.send({'message':'node post success'});
});

module.exports = router;


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
