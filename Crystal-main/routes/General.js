/********************  npm Install *****************/
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const flash = require("express-flash");
// router.set("view engine", "handlebars");
/*********************ADMIN ROUTES***************************/
var Employee = require("../models/Employee");
var Position = require("../models/Position");
const initializePassport = require("./passprot");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const router = express.Router();
/********************* Passport Setting ********************* */
initializePassport(
  passport,
  (email) => Employee.findOne((user) => user.email === email),
  (id) => Employee.findById((user) => user.id === id)
);
const AuthController = require("../controllers/authController");
const { check } = require("express-validator");
/********************* Passport *********************/
require("./passprot")(passport);
/*********************ROUTER SET***************************/
router.use(express.urlencoded({ extended: false }));
router.use(flash());
router.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    // duration: 1000,
    // activeDuration: 1000,
  })
);
router.use(passport.initialize());
router.use(passport.session());
router.use(flash());
router.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});
/********************* GET & POST ********************* */
//------------ Home Handle ------------//
router.get("/", checkAuthenticated, (req, res) => {
  res.render("General/home", { user: req.user });
});
//------------ Email pre-set Handle ------------//
const EMAIL_SECRET = "asdf1093KMnzxcvnkljvasdu09123nlasdasdf";
router.get("/confirmation/:token", async (req, res) => {
  try {
    const {
      user: { id },
    } = jwt.verify(req.params.token, EMAIL_SECRET);
    await Employee.updateOne({ isVerified: true }, { where: { id } });
  } catch (e) {
    res.send("error");
  }
  return res.redirect("/login");
});

//------------ Login Handle ------------//
router.get("/login", AuthController.getLogin);
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/redirect",
    failureRedirect: "/Login",
    failureFlash: true,
  })
),
  router.get("/redirect", checkAuthenticated, async (req, res) => {
    // if (req.user.isManager) await res.redirect("/sendEmail");
    // if (req.user.isManager) await res.redirect("/employees");
    // if (req.user.isManager) await res.redirect("/employee");
    if (req.user.isManager) await res.redirect("/admin");
    else await res.redirect("/user");
  });

//------------ Register  Handle ------------//
router.get("/register", AuthController.getRegister);
router.post("/register", AuthController.postRegister);
router.get("/activate/:token", AuthController.activeAccount);

//------------ Forgot Password Handle ------------//
router.get("/forgot", (req, res) => res.render("Login/forgot"));
router.post("/forgot", AuthController.forgotPassword);
router.get("/forgot/:token", AuthController.gotoReset);
router.get("/forgotReset/:id", AuthController.getForgotReset);
router.put("/forgotReset/:id", AuthController.postForgotReset);
//------------ Employee list GET Handle ------------//
router.get("/employees", checkAuthenticated, (req, res) => {
  if (req.user.isManager) AuthController.getAllEmployee(req, res);
  else
    res.redirect(
      "/user"
      // {error: "You are not allowed to it"}
    );
});
//------------ Logout GET Handle ------------//
router.get("/logout", AuthController.getLogout);
//------------ Send Email Handle ------------//
router.get("/sendEmail", checkAuthenticated, (req, res) => {
  AuthController.getSendEmail(req, res);
});
router.post("/sendEmail", (req, res) => {
  AuthController.postSendEmail(req, res);
});
//------------ Reset Password Handle ------------//
router.get("/reset", checkAuthenticated, (req, res) => {
  res.redirect(`/reset/:${req.user._id}`);
});
router.get("/reset/:id", checkAuthenticated, (req, res) => {
  AuthController.getResetPwd(req, res);
});
router.put("/reset/:id", checkAuthenticated, (req, res) => {
  AuthController.postResetPwd(req, res);
});
// gary13424@gmail.com
//------------ Edit Employee Handle ------------//
router.get("/employee", checkAuthenticated, (req, res) => {
  res.redirect(`/employee/:${req.user._id}`);
});
router.get("/employee/:id", checkAuthenticated, (req, res) => {
  AuthController.getEditEmployee(req, res);
});
router.put("/employee/:id", checkAuthenticated, (req, res) => {
  AuthController.postEditEmployee(req, res);
});
//------------ Admin Edit Employee Handle ------------//
router.get("/adminEditEmployee/:id", checkAuthenticated, (req, res) => {
  AuthController.getAdminEditEmployee(req, res);
});
router.put("/adminEditEmployee/:id", checkAuthenticated, (req, res) => {
  AuthController.postAdminEditEmployee(req, res);
});

//------------ Check Authenticated ------------//
function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}
module.exports = router;
