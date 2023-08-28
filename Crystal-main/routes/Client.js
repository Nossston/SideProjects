/********************* APP ROUTES ***************************/
const express = require("express");
const clientController = require("./../controllers/clientController");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const hasAccessUser = require("../middleware/authUser");

// router.route("/").get(clientController.getAllClient);
router.get("/", hasAccessUser, (req, res) => {
  clientController.getAllClient(req, res);
});

router.get("/createClient", hasAccessUser, (req, res) => {
  clientController.createClientForm(req, res);
});
router.post("/createClient", hasAccessUser, clientController.createClient);
// router.route("/createClient")
//   .get(clientController.createClientForm)
//   .post(clientController.createClient);

// router.route("/clientDetail/:id").get(clientController.getClientDetail);
router.get("/clientDetail/:id", hasAccessUser, (req, res) => {
  clientController.getClientDetail(req, res);
});

router.get("/editClient/:id", (req, res) => {
  clientController.editClientForm(req, res);
});
router.post("/editClient/:id", hasAccessUser, clientController.updateClient);
// .route("/editClient/:id")
// .get(clientController.editClientForm)
// .post(clientController.updateClient);

//   .delete(clientController.deleteClient);

router.route("/deleteClient/:id").post(clientController.deleteClient);

module.exports = router;
