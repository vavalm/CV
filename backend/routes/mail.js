const express = require('express');
const router = express.Router();
const mailCtrl = require('../controllers/mail');

router.get('/ping', mailCtrl.pingMail);
router.put('/send', mailCtrl.sendMail);

module.exports = router;
