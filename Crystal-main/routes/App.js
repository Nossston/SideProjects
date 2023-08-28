/********************* APP ROUTES ***************************/
const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const moment = require("moment");
const enumHelpers = require("../helpers/enumHelper");
const { caseTypes, subCaseTypes } = require("../helpers/caseAndSubCaseHelper");
const arrayHelpers = require("../helpers/arrayHelper");
const caseAndSubCaseHelper = require("../helpers/caseAndSubCaseHelper");
const paymentTypes = require("../shared/enum/paymentTypes");
const appStatus = require("../shared/enum/appStatus");
const Payment = require("../models/Payment");
const App = require("../models/Application");
const Client = require("./../models/clientModel");
const Employee = require("../models/Employee");
const hasAccessUser = require("../middleware/authUser");

/* LIST */
router.get("/", hasAccessUser, (req, res) => {
  App.find()
    .lean()
    .then((apps) => {
      const appList = [];
      if (apps) {
        apps.forEach((e) => {
          let app = e;
          let subcase;
          let ct;
          let casetype;
          // Retrieve Case Type
          for (i = 0; i < subCaseTypes.length; i++) {
            if (subCaseTypes[i].id == app.subCaseType) {
              subcase = subCaseTypes[i].name;
            }
          }
          app.subCaseType = subcase;
          // Convert Date Format
          // app.submitDate = moment(app.submitDate).format("YYYY-MM-DD");
          appList.push(app);
        });
      }
      res.render("Apps/listApp", {
        user: req.user,
        apps: appList,
      });
    })
    .catch((err) => console.log(`Error : ${err}`));
});

/* DETAIL "/app/:id"*/
router.get("/appDetail/:id", hasAccessUser, (req, res) => {
  App.findById(req.params.id)
    .lean()
    .then((app) => {
      const paymentTypeNameAndValue = enumHelpers.getNamesAndValues(
        paymentTypes.paymentTypes
      );
      const appStatusTypeNameAndValue = enumHelpers.getNamesAndValues(
        appStatus.appStatus
      );

      if (app.payment && app.payment.method) {
        const paymentType = arrayHelpers.firstOrDefault(
          paymentTypeNameAndValue,
          (pmt) => pmt.value.toString() === app.payment.method.toString()
        );
        if (paymentType) {
          app.payment.method = paymentType.name;
        }
      }
      const casetypes = caseAndSubCaseHelper.subCaseTypes;

      if (app.subCaseType) {
        const subCaseType = arrayHelpers.firstOrDefault(
          casetypes,
          (c) => c.id === app.subCaseType
        );
        if (subCaseType) {
          app.subCaseType = subCaseType.name;
        }
      }

      if (app.appStatus) {
        const appStatus = arrayHelpers.firstOrDefault(
          appStatusTypeNameAndValue,
          (status) => status.value.toString() === app.appStatus.toString()
        );
        if (appStatus) {
          app.appStatus = appStatus.name;
        }
      }

      res.render("Apps/appDetail", {
        user: req.user,
        app: app,
        // contractD: moment(app.contractDate).format("YYYY-MM-DD"),
        // submitD: moment(app.submissionDate).format("YYYY-MM-DD"),
      });
    })
    .catch((err) => console.log(`Error : ${err}`));
});

/* CREATE */
router.get("/createApp", hasAccessUser, (req, res) => {
  Employee.find()
    .lean()
    .then((emp) => {
      Client.find()
        .lean()
        .then((clients) => {
          const pmtMethodNameAndValue = enumHelpers.getNamesAndValues(
            paymentTypes.paymentTypes
          );
          const appStatusNameAndValue = enumHelpers.getNamesAndValues(
            appStatus.appStatus
          );
          res.render("Apps/createApp", {
            user: req.user,
            emp: emp,
            clients: clients,
            casetypes: caseAndSubCaseHelper.getCaseAndSubCase(),
            paymenttypes: pmtMethodNameAndValue,
            appstatus: appStatusNameAndValue,
          });
        });
    })
    .catch((err) => console.log(`Error : ${err}`));
});

router.post("/createApp", (req, res) => {
  console.log(req.body);

  Employee.findById(req.body.employee).then((emp) => {
    Client.findById(req.body.client).then((c) => {
      const clientInitial = c.firstName.charAt(0) + c.lastName.charAt(0);
      // Year-Month-Date-Minutes-Seconds-MiliSeconds
      const applicationDate = moment().format("YYYY-MM-DD-mm-ss-SS");

      let payment = null;
      if (
        req.body.paymentAmt &&
        req.body.paymentDate &&
        req.body.paymentMethod
      ) {
        payment = {
          paymentID: `${clientInitial}-${applicationDate}`,
          amount: req.body.paymentAmt,
          date: req.body.paymentDate,
          method: req.body.paymentMethod,
        };
      }
      const newApp = {
        agent: emp,
        client: c,
        subCaseType: req.body.caseType,
        contractID: req.body.contractNumber,
        contractDate: moment(req.body.contractDate)
          .format("YYYY-MM-DD")
          .toString(),
        payment: payment,
        appStatus: req.body.appStatus,
        submitDate: moment(req.body.submissionDate)
          .format("YYYY-MM-DD")
          .toString(),
        notes: req.body.notes,
      };
      const n_app = new App(newApp);

      console.log(n_app);

      n_app
        .save()
        .then((n_app) => {
          console.log(`Application added to the database`);
          res.redirect(`/apps/appDetail/${n_app._id}`);
        })
        .catch((err) => console.log(`Error :${err}`));
    });
  });
});

/* EDIT "/edit/:id"*/
router.get("/editApp/:id", hasAccessUser, (req, res) => {
  App.findById(req.params.id)
    .lean()
    .then((app) => {
      const pmtMethodNameAndValue = enumHelpers.getNamesAndValues(
        paymentTypes.paymentTypes
      );
      const appStatusTypeNameAndValue = enumHelpers.getNamesAndValues(
        appStatus.appStatus
      );
      res.render("Apps/editApp", {
        user: req.user,
        app: app,
        // contractD: moment(app.contractDate).format("YYYY-MM-DD"),
        // submitD: moment(app.submissionDate).format("YYYY-MM-DD"),
        casetypes: caseAndSubCaseHelper.getCaseAndSubCase(),
        paymenttypes: pmtMethodNameAndValue,
        appstatus: appStatusTypeNameAndValue,
      });
    })
    .catch((err) => console.log(`Error : ${err}`));
});

router.put("/editApp/:id", (req, res) => {
  const renderEditAppPage = (app, err) => {
    const pmtMethodNameAndValue = enumHelpers.getNamesAndValues(
      paymentTypes.paymentTypes
    );
    const appStatusTypeNameAndValue = enumHelpers.getNamesAndValues(
      appStatus.appStatus
    );
    res.render("Apps/editApp", {
      user: req.user,
      app: app,
      // contractD: moment(app.contractDate).format("YYYY-MM-DD"),
      // submitD: moment(app.submissionDate).format("YYYY-MM-DD"),
      casetypes: caseAndSubCaseHelper.getCaseAndSubCase(),
      paymenttypes: pmtMethodNameAndValue,
      appstatus: appStatusTypeNameAndValue,
      error: err,
    });
  };
  App.findById(req.params.id)
    .lean()
    .then((app) => {
      // const clientInitial =
        // app.client.firstName.charAt(0) + app.client.lastName.charAt(0);
      // Year-Month-Date-Minutes-Seconds-MiliSeconds
      // const applicationDate = moment().format("YYYY-MM-DD-mm-ss-SS");
      // let paymentID = `${clientInitial}-${applicationDate}`;
      // if (app.payment && app.payment.paymentID) {
      //   paymentID = app.payment.paymentID;
      // }
      // let payment = null;
      // if (
      //   req.body.paymentAmt &&
      //   req.body.paymentDate &&
      //   req.body.paymentMethod
      // ) {
        let payment = {
          paymentID: app.payment.paymentID,
          amount: req.body.paymentAmt,
          date: req.body.paymentDate,
          method: req.body.paymentMethod,
        // };
      }
      App.findByIdAndUpdate(
        req.params.id,
        {
          contractID: req.body.contractNumber,
          contractDate: moment(req.body.contractDate)
            .format("YYYY-MM-DD")
            .toString(),
          appStatus: req.body.appStatus,
          submitDate: moment(req.body.submissionDate)
            .format("YYYY-MM-DD")
            .toString(),
          notes: req.body.notes,
          payment: payment,
        },
        { new: true }
      )
        .then(res.redirect(`/apps/appDetail/${app._id}`))
        .catch((ex) => {
          console.log(`Error : ${ex}`);
          renderEditAppPage(app, ex.message);
        });
    })
    .catch((err) => {
      console.log(`Error : ${err}`);
      renderEditAppPage(null, err.message);
    });

  // App.findByIdAndUpdate(
  //   req.params.id,
  //   {
  //     contractID: req.body.contractNumber,
  //     contractDate: req.body.contractDate,
  //     appStatus: req.body.appStatus,
  //     submitDate: req.body.submissionDate,
  //     notes: req.body.notes,
  //   },
  //   { new: true }
  // ).then(res.redirect("/apps"));
});

/* DELETE */
router.delete("/delete/:id", hasAccessUser, (req, res) => {
  App.deleteOne({ _id: req.params.id })
    .then((app) => {
      res.redirect("/apps");
    })
    .catch((err) => console.log(`Error : ${err}`));
});

module.exports = router;
