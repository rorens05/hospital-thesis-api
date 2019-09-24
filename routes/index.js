var express = require('express');
var router = express.Router();

let auth = require('../controllers/auth_controller');
let index = require('../controllers/index');

router.post('/login', auth.login)
router.post('/register', auth.register)
router.get('/', index.index)

module.exports = router;
