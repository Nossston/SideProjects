const express = require("express");
const Client = require("./../models/clientModel");
const Language = require("./../models/languageModel");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const guidHelper = require("../helpers/guid");
const clientHelpers = require("../helpers/clientHelper");
const enumHelpers = require("../helpers/enumHelper");
const languages = require("../shared/enum/languages");
const clientStatuses = require("../shared/enum/clientStatus");
const createClientFormTypes = require("../shared/enum/createClientFormTypes");
const countriesAndProvincesHelper = require("../helpers/countriesAndProvincesHelper");
const { caseTypes, subCaseTypes } = require("../helpers/caseAndSubCaseHelper");
const caseAndSubCaseHelper = require("../helpers/caseAndSubCaseHelper");
const moment = require("moment");
const arrayHelpers = require("../helpers/arrayHelper");
const App = require("./../models/Application");
const Employee = require("./../models/Employee");

const goToClientsPage = (res, clients, error, user) => {
  res.render("./../views/Clients/clients", {
    clients: clients,
    error: error,
    user,
  });
};

// Get Clients List
exports.getAllClient = (req, res) => {
  try {
    Client.find()
      .lean()
      .then((clients) => {
        goToClientsPage(res, clients, null, req.user);
      })
      .catch((err) => {
        console.error(`Error :${err}`);
        goToClientsPage(res, null, err.message, req.user);
      });
  } catch (ex) {
    console.error(`Error :${ex}`);
    goToClientsPage(res, null, ex.message, req.user);
  }
};

// Get Create Client Form
exports.createClientForm = (req, res) => {
  // Convert Languages Enum to Array of {name: string, value: string||number}
  redirectToCreateEditClientForm(
    req.user,
    res,
    createClientFormTypes.createClientFormTypes.CreateClient
  );
};

// Shared function to navigate to Creare and Edit Client page
function redirectToCreateEditClientForm(
  user,
  res,
  formType,
  client = null,
  error = null
) {
  const languagesNameAndValue = enumHelpers.getNamesAndValues(
    languages.languages
  );

  const clientStatusNamesAndValue = enumHelpers.getNamesAndValues(
    clientStatuses.clientStatus
  );

  // Fix Date time field format
  if (client) {
    // client.dob = moment(client.dob).format("YYYY-MM-DD");
    // client.dateEntersCanada = moment(client.dateEntersCanada).format(
    //   "YYYY-MM-DD"
    // );
    if (client.passport && client.passport.issueDate) {
      client.passport.issueDate = moment(client.passport.issueDate).format(
        "YYYY-MM-DD"
      );
    }

    if (client.passport && client.passport.expireDate) {
      client.passport.expireDate = moment(client.passport.expireDate).format(
        "YYYY-MM-DD"
      );
    }
  }

  const render = (employees, error) => {
    res.render(
      formType === createClientFormTypes.createClientFormTypes.CreateClient
        ? "./../views/Clients/createClient"
        : "./../views/Clients/editClient",
      {
        languages: languagesNameAndValue,
        countryAndProvinces:
          countriesAndProvincesHelper.getCountriesAndProvinces(),
        clientStaus: clientStatusNamesAndValue,
        client: client,
        employees: employees,
        error: error,
        user,
      }
    );
  };
  // Find all the employees
  getAllEmployees(
    // If successful render the page
    (employees) => {
      render(employees, error);
    },
    // If not successful render the page with error
    (ex) => {
      console.error(`Error on getting all the employees.`, ex);
      render(null, ex.message);
    }
  );
}

// Post Create Client Form
exports.createClient = (req, res) => {
  try {
    const errors = clientHelpers.validateClient(req.body);
    if (errors) {
      throw new Error(errors);
    }
    console.log(req.body);
    const addedClient = new Client(req.body);
    addedClient.clientId = guidHelper.newGuid();
    addedClient.dob = moment(req.body.dob).format("YYYY-MM-DD");
    addedClient.dateEntersCanada = moment(req.body.dateEntersCanada).format(
      "YYYY-MM-DD"
    );

    // Construct the passport object
    addedClient.passport = {
      passportNumber: req.body.passportNumber,
      issueDate: req.body.issueDate
        ? moment(req.body.issueDate).format("YYYY-MM-DD")
        : null,
      expireDate: req.body.expireDate
        ? moment(req.body.expireDate).format("YYYY-MM-DD")
        : null,
      placeOfBirth: req.body.placeOfBirth,
      placeOfIssue: req.body.placeOfIssue,
    };

    // Construct the passport object
    addedClient.status = {
      statusID: req.body.statusID,
      statusExpireDate: req.body.statusExpireDate
        ? moment(req.body.statusExpireDate).format("YYYY-MM-DD")
        : null,
      statusDocumerntID: req.body.statusDocumerntID,
    };

    console.log(addedClient);
    addedClient
      .save()
      .then((addedClient) => {
        console.log("Created: ", addedClient);
        console.log(`Client added to the database`);
        // res.json({ message: addedClient, success: true });
        res.redirect(`/clients/clientDetail/${addedClient.clientId}`);
      })
      .catch((err) => {
        console.error(`Error :${err}`);
        // res.json({ message: `${err.message}`, success: false });
        redirectToCreateEditClientForm(
          req.user,
          res,
          createClientFormTypes.createClientFormTypes.CreateClient,
          req.body,
          err.message
        );
      });
  } catch (ex) {
    console.error(`Error :${ex}`);
    // res.json({
    //   message: `${ex.message}`,
    //   success: false,
    // });
    redirectToCreateEditClientForm(
      req.user,
      res,
      createClientFormTypes.createClientFormTypes.CreateClient,
      req.body,
      ex.message
    );
  }
};

// Get all the linked application for client
function getClientApplications(clientId, successCallback, errorCallback) {
  App.find({ "client.clientId": clientId })
    .lean()
    .then((clientDetails) => {
      successCallback(clientDetails);
    })
    .catch((err) => {
      console.error(`Error :${err}`);
      errorCallback(err);
    });
}

// Get all the employess
function getAllEmployees(successCallback, errorCallback) {
  Employee.find()
    .lean()
    .then((employess) => {
      successCallback(employess);
    })
    .catch((err) => {
      console.error(`Error :${err}`);
      errorCallback(err);
    });
}

// Get all the employess
function getEmployeesByID(employeeID, successCallback, errorCallback) {
  Employee.findOne({ employeeId: employeeID })
    .lean()
    .then((employee) => {
      successCallback(employee);
    })
    .catch((err) => {
      console.error(`Error :${err}`);
      errorCallback(err);
    });
}

function renderClientDetails(res, clientID, req) {
  const languagesNameAndValue = enumHelpers.getNamesAndValues(
    languages.languages
  );

  const clientStatusNamesAndValue = enumHelpers.getNamesAndValues(
    clientStatuses.clientStatus
  );
  // Navigate to details page
  const navigateToClientDetails = (res, client, error) => {
    // Shared function to render the details page
    const renderPage = (
      languages,
      countryAndProvinces,
      clientStaus,
      client,
      applications,
      employee,
      error
    ) => {
      res.render("./../views/Clients/clientDetails", {
        user: req.user,
        languages: languages,
        countryAndProvinces: countryAndProvinces.getCountriesAndProvinces(),
        clientStaus: clientStaus,
        client: client,
        applications: applications,
        employee: employee,
        error: error,
      });
    };
    // Find necessary data and fix date time format
    if (client) {
      // Fix Dates for HTML
      // client.dob = moment(client.dob).format("YYYY-MM-DD");
      // client.dateEntersCanada = moment(client.dateEntersCanada).format(
      //   "YYYY-MM-DD"
      // );

      if (client.passport && client.passport.placeOfBirth) {
        const placeOfBirth = arrayHelpers.firstOrDefault(
          countriesAndProvincesHelper.provinces,
          (pr) => pr.id === client.passport.placeOfBirth
        );
        if (placeOfBirth) {
          client.passport.placeOfBirth = placeOfBirth.name;
        }
      }

      if (client.passport && client.passport.placeOfIssue) {
        const placeOfIssue = arrayHelpers.firstOrDefault(
          countriesAndProvincesHelper.provinces,
          (pr) => pr.id === client.passport.placeOfIssue
        );
        if (placeOfIssue) {
          client.passport.placeOfIssue = placeOfIssue.name;
        }
      }

      const conutry = arrayHelpers.firstOrDefault(
        countriesAndProvincesHelper.countries,
        (c) => c.id === client.countryOfCitizenShip
      );
      if (conutry) {
        client.countryOfCitizenShip = conutry.name;
      }

      const language = arrayHelpers.firstOrDefault(
        languagesNameAndValue,
        (l) => l.value.toString() === client.firstLanguage.toString()
      );
      if (language) {
        client.firstLanguage = language.name;
      }

      if (client.status && client.status.statusID) {
        const status = arrayHelpers.firstOrDefault(
          clientStatusNamesAndValue,
          (s) => s.value.toString() === client.status.statusID.toString()
        );
        if (status) {
          client.status.statusID = status.name;
        }
      }

      // Error callback for async calls
      const errorCallback = (err) => {
        throw new Error(err.message);
      };
      // Find linked client's employee details
      getEmployeesByID(
        client.employeeID,
        (employee) => {
          // Success callback for async call
          const successCallback = (applications) => {
            if (applications) {
              applications.forEach((e) => {
                let sc = e.subCaseType; //'pn'
                let subCaseType;
                let ct; // caseTypeID: 'EI';  id: 'EI'; name:
                let caseType;
                for (let i = 0; i < subCaseTypes.length; i++) {
                  if (subCaseTypes[i].id == sc) {
                    subCaseType = subCaseTypes[i].name;
                    ct = subCaseTypes[i].caseTypeID;
                    i = subCaseTypes.length + 1;
                  }
                }
                for (let i = 0; i < caseTypes.length; i++) {
                  if (caseTypes[i].id == ct) {
                    caseType = caseTypes[i].name;
                    i = caseTypes.length + 1;
                  }
                }
                e.subcase = subCaseType;
                e.casetype = caseType;
              });
            }
            renderPage(
              languagesNameAndValue,
              countriesAndProvincesHelper,
              clientStatusNamesAndValue,
              client,
              applications,
              employee,
              error
            );
          };
          // Find all the associated Application for this client
          getClientApplications(
            client.clientId,
            successCallback,
            errorCallback
          );
        },
        errorCallback
      );
    } else {
      // If no client render the page with errors
      renderPage(
        languagesNameAndValue,
        countriesAndProvincesHelper,
        clientStatusNamesAndValue,
        client,
        null,
        null,
        error
      );
    }
  };
  // Find Client by clientId
  Client.findOne({ clientId: clientID })
    .lean()
    .then((client) => {
      navigateToClientDetails(res, client, null);
    })
    .catch((err) => {
      console.error(`Error :${err}`);
      navigateToClientDetails(res, null, err.message);
    });
}

// Get Client Details
exports.getClientDetail = (req, res) => {
  try {
    renderClientDetails(res, req.params.id, req);
  } catch (ex) {
    console.error(`Error :${ex}`);
    goToClientsPage(res, null, ex.message);
  }
};

// Edit Client
exports.editClientForm = (req, res) => {
  try {
    Client.findOne({ clientId: req.params.id })
      .lean()
      .then((client) => {
        redirectToCreateEditClientForm(
          req.user,
          res,
          createClientFormTypes.createClientFormTypes.EditClient,
          client,
          null
        );
      })
      .catch((err) => {
        console.error(`Error :${err}`);
        redirectToCreateEditClientForm(
          req.user,
          res,
          createClientFormTypes.createClientFormTypes.EditClient,
          null,
          err.message
        );
      });
  } catch (ex) {
    console.error(`Error :${ex}`);
    redirectToCreateEditClientForm(
      req.user,
      res,
      createClientFormTypes.createClientFormTypes.EditClient,
      null,
      ex.message
    );
  }
};

// Edit Client
exports.updateClient = (req, res) => {
  try {
    Client.findOne({ clientId: req.params.id })
      .lean()
      .then((clientDetails) => {
        // Update Client fields
        let user = req.user;
        clientDetails.uci_number = req.body.uci_number;
        clientDetails.firstName = req.body.firstName;
        clientDetails.lastName = req.body.lastName;
        clientDetails.dob = moment(req.body.dob).format("YYYY-MM-DD");

        clientDetails.gender = req.body.gender;
        clientDetails.phoneNumber = req.body.phoneNumber;
        clientDetails.address = req.body.address;
        clientDetails.employeeID = req.body.employeeID;

        clientDetails.passport = {
          passportNumber: req.body.passportNumber,
          issueDate: req.body.issueDate
            ? moment(req.body.issueDate).format("YYYY-MM-DD")
            : null,
          expireDate: req.body.expireDate
            ? moment(req.body.expireDate).format("YYYY-MM-DD")
            : null,
          placeOfBirth: req.body.placeOfBirth,
          placeOfIssue: req.body.placeOfIssue,
        };

        clientDetails.dateEntersCanada = moment(
          req.body.dateEntersCanada
        ).format("YYYY-MM-DD");
        clientDetails.firstLanguage = req.body.firstLanguage;
        clientDetails.email = req.body.email;
        clientDetails.countryOfCitizenShip = req.body.countryOfCitizenShip;

        clientDetails.status = {
          statusID: req.body.statusID,
          statusExpireDate: req.body.statusExpireDate
            ? moment(req.body.statusExpireDate).format("YYYY-MM-DD")
            : null,
          statusDocumerntID: req.body.statusDocumerntID,
        };

        // Validate Client before update
        const errors = clientHelpers.validateClient(clientDetails);
        if (errors) {
          throw new Error(errors);
        }

        Client.updateOne({ clientId: req.params.id }, clientDetails)
          .then((client) => {
            renderClientDetails(res, req.params.id, req);
          })
          .catch((err) => {
            console.error(`Error :${err}`);
            redirectToCreateEditClientForm(
              req.user,
              res,
              createClientFormTypes.createClientFormTypes.EditClient,
              null,
              err.message
            );
          });
      })
      .catch((err) => {
        console.error(`Error :${err}`);
        redirectToCreateEditClientForm(
          req.user,
          res,
          createClientFormTypes.createClientFormTypes.EditClient,
          null,
          err.message
        );
      });
  } catch (ex) {
    console.error(`Error :${ex}`);
    redirectToCreateEditClientForm(
      req.user,
      res,
      createClientFormTypes.createClientFormTypes.EditClient,
      null,
      ex.message
    );
  }
};

exports.deleteClient = (req, res) => {
  try {
    // Delete all accosicated application of client
    App.deleteMany({ "client.clientId": req.params.id })
      .exec()
      .then((clientDetails) => {
        // Delete the Client
        Client.deleteOne({ clientId: req.params.id })
          .exec()
          .then((client) => {
            res.redirect("/clients");
          })
          .catch((err) => {
            console.error(`Error :${err}`);
            goToClientsPage(res, null, err.message);
          });
      })
      .catch((err) => {
        console.error(`Error :${err}`);
        goToClientsPage(res, null, err.message);
      });
  } catch (ex) {
    console.error(`Error :${ex}`);
    goToClientsPage(res, null, ex.message);
  }
};
