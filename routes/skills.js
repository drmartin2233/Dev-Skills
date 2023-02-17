var express = require('express');
var router = express.Router();

let skillsCtrl = require('../controllers/skills')


// All actual paths start with "/skills"

router.get('/', skillsCtrl.index)
// GET /skills/new <- define before show route
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);
//post /skill
router.post('/', skillsCtrl.create);

router.delete('/:id', skillsCtrl.delete);

module.exports = router;
