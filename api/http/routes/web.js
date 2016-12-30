var express = require('express');
var indexController = require('.././controllers/indexController.js');
var emailController = require('.././controllers/emailController.js');
var router = express.Router();


/*----------------------------------------------------------------------------
 *
 * Index Controller
 * ---------------------------------------------------------------------------*/
router.route('/').get(indexController.getIndex);

/*----------------------------------------------------------------------------
 *
 * Emails Controller
 * ---------------------------------------------------------------------------*/
router.route('/submitContactUsForm').post(emailController.sendContactUsEmail);






module.exports = router;
