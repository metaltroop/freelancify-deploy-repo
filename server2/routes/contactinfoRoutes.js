const ensureAuthenticated = require("../auth");
const {
  createContactinfo,
  getContactinfo,
  getContactinfoById,
  deleteContactinfoById,
} = require("../controllers/contactinfoController");

const router = require('express').Router();

router.put("/:id", ensureAuthenticated, createContactinfo);
router.get("/", getContactinfo);
router.get("/:id", getContactinfoById);
router.delete("/:id", ensureAuthenticated, deleteContactinfoById);

module.exports= router