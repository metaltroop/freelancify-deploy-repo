const router = require("express").Router();
const { registerUser, login } = require("../controllers/userController.js");
const ensureAuthenticated=require('../auth');
const { getCurrentUser, updateUserProfile,getUsersByDomain , updateContactInfo } = require("../controllers/userController");
const multer = require('multer');
const upload = require('../multerConfig');
router.post("/register", registerUser);
router.post("/login", login);
router.get("/current", ensureAuthenticated, getCurrentUser); // Fetch current user
// router.put("/:email", ensureAuthenticated, updateUserProfile);
router.put("/contact/:email", ensureAuthenticated, updateContactInfo); // Add this line for updating contact information
router.get("/domain/:domain", getUsersByDomain);
router.put("/:email", ensureAuthenticated, upload.single('profileImage'), updateUserProfile);



module.exports = router;
