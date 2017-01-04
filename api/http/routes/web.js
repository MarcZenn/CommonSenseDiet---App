var express = require('express');
var indexController = require('.././controllers/indexController.js');
var emailController = require('.././controllers/emailController.js');
var ndbController = require('.././controllers/ndbController.js');
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



/*----------------------------------------------------------------------------
 *
 * NDB API Controller
 * ---------------------------------------------------------------------------*/
router.route('/getFoodNamesOnly/:limit').get(ndbController.getFoodNamesOnly);
router.route('/getSearchResults/:searchterm').get(ndbController.getSearchResults);
router.route('/getNutritionalData/:id').get(ndbController.getNutritionalData);





module.exports = router;
