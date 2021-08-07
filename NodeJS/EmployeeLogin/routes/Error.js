const express = require("express");
const router = express.Router();
const hasAccessUser = require("../middleware/authUser");

//------------ 404 Handle ------------//
router.get("*", hasAccessUser, (req, res) => {
  res.render("General/404");
});

module.exports = router;
