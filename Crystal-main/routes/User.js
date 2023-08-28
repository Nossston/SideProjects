/*********************ADMIN ROUTES***************************/
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const Client = require("./../models/clientModel");
const moment = require("moment-timezone");
const eventTypes = require("./../shared/enum/eventTypes");

const hasAccessUser = require("../middleware/authUser");
const { forEach } = require("lodash");

router.get("/sendemail/:id", hasAccessUser, (req, res) => {
  try {
    const navigateToSendEmail = (userEmail) => {
      res.render("Login/sendEmail", {
        user: req.user,
        userEmail: userEmail,
      });
    };
    Client.findOne({ clientId: req.params.id })
      .lean()
      .then((client) => {
        navigateToSendEmail(client.email);
      })
      .catch((err) => {
        console.error(`Error :${err}`);
        navigateToSendEmail(null);
      });
  } catch (err) {
    console.error(`Error :${err}`);
    navigateToSendEmail(null);
  }
});

router.get("/", hasAccessUser, (req, res) => {
  try {
    const navigateToEmployeeDashboard = (notifications, error) => {
      res.render("Emp/empDash", {
        user: req.user,
        notifications,
        err: error,
      });
    };
    Client.find()
      .lean()
      .then((clients) => {
        let notifications = [];
        if (clients) {
          clients.forEach((e) => {
            if (e.passport) {
              const currentDate = moment.tz("America/Toronto");
              if (e.passport.expireDate && e.passport.expireDate.trim() != "") {
                const expireDate = moment(e.passport.expireDate);

                const diffDate = moment
                  .duration(expireDate.diff(currentDate))
                  .asDays();
                // If passport expire date is within 90 days
                if (expireDate <= currentDate || diffDate < 90) {
                  notifications.push({
                    eventName: "Passport Expiring Soon",
                    eventType: eventTypes.eventTypes.ExpiredPassport,
                    dueDate: e.passport.expireDate,
                    client: e,
                  });
                }
              }
            }
            if (e.status) {
              const currentDate = moment();
              if (
                e.status.statusExpireDate &&
                e.status.statusExpireDate.trim() != ""
              ) {
                const expireDate = moment(e.status.statusExpireDate);

                const diffDate = moment
                  .duration(expireDate.diff(currentDate))
                  .asDays();
                // If passport expire date is within 90 days
                if (expireDate <= currentDate || diffDate < 90) {
                  notifications.push({
                    eventName: "Visa Expiring Soon",
                    eventType: eventTypes.eventTypes.ExpiredVisa,
                    dueDate: e.status.statusExpireDate,
                    client: e,
                  });
                }
              }
            }
          });
        }
        navigateToEmployeeDashboard(notifications, null);
      })
      .catch((err) => {
        console.error(`Error :${err}`);
        navigateToEmployeeDashboard(null, err.message);
      });
  } catch (ex) {
    console.error(`Error :${ex}`);
    navigateToEmployeeDashboard(null, err.message);
  }
});

module.exports = router;
