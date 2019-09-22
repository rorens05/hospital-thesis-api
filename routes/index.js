var express = require('express');
var router = express.Router();

let auth = require('../controllers/auth_controller');

router.post('/login', auth.login)
router.post('/register', auth.register)

module.exports = router;
