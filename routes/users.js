var express = require('express');
var router = express.Router();
let controller = require('./../controllers/user_constroller')

/* GET users listing. */
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
