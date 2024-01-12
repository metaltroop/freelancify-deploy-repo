// const ensureAuthenticated1 = require("../adminAuthentication");
// const {adminGet}=require('../controllers/adminController');

// const router=require('express').Router();

// router.get('/chetandarade1522@gmail.com',ensureAuthenticated1, adminGet);
// router.get('/freelancifysphere2023@gmail.com',ensureAuthenticated1, adminGet);
// router.get('/kalepiyush2023@gmail.com',ensureAuthenticated1, adminGet);


// module.exports=router;
// adminRouter.js
const express = require('express');
const adminController = require('../controllers/adminController');
const ensureAuthenticated1 = require('../adminAuthentication');

const router = express.Router();

router.get('/', ensureAuthenticated1, adminController.getAdminPage);

module.exports = router;
