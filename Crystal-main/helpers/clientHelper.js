const allLanguages = require("../shared/enum/languages");

exports.validateClient = (client) => {
  // Array that hold the error messages
  let errors = [];

  if (!client.employeeID) {
    errors.push("EmployeeID is Required.");
  }

  if (!client.email) {
    errors.push("Email is Required.");
  }

  // if (!client.uci_number) {
  //   errors.push("UCI Number is Required.");
  // }

  if (!client.firstName) {
    errors.push("First Name is Required.");
  } else {
    if (client.firstName.length > 50) {
      errors.push("First Name must not be longer than 50 Characters.");
    }
  }

  if (!client.lastName) {
    errors.push("Last Name is Required.");
  } else {
    if (client.lastName.length > 50) {
      errors.push("Last Name must not be longer than 50 Characters.");
    }
  }

  if (!client.gender) {
    errors.push("Gender is Required.");
  }

  if (!client.countryOfCitizenShip) {
    errors.push("Country Of Citizen Ship is Required.");
  }

  if (!client.dob) {
    errors.push("Date of Birth is Required.");
  }

  if (!client.phoneNumber) {
    errors.push("Phone Number is Required.");
  } else {
    if (client.phoneNumber.length > 20) {
      errors.push("Phone Number must not be longer than 20 Characters.");
    }
  }

  if (!client.address) {
    errors.push("Address is Required.");
  } else {
    if (client.address.length > 100) {
      errors.push("Address must not be longer than 100 Characters.");
    }
  }

  // Passport Validation
  if (
    client.passport &&
    (client.passport.passportNumber ||
      client.passport.issueDate ||
      client.passport.expireDate ||
      client.passport.placeOfBirth ||
      client.passport.placeOfIssue)
  ) {
    if (!client.passport.passportNumber) {
      errors.push("Passport Number is Required.");
    }
    if (!client.passport.issueDate) {
      errors.push("Passport Issue Date is Required.");
    }
    if (!client.passport.expireDate) {
      errors.push("Passport Expire Date is Required.");
    }
    if (!client.passport.placeOfBirth) {
      errors.push("Passport Place Of Birth is Required.");
    }
    if (!client.passport.placeOfIssue) {
      errors.push("Passport Place Of Issue is Required.");
    }
  }

  if (!client.dateEntersCanada) {
    errors.push("Date Enters Canada is Required.");
  }

  if (!client.firstLanguage) {
    errors.push("First Language is Required.");
  }
  if (
    (client.firstLanguage &&
      client.firstLanguage === allLanguages.languages.None) ||
    (client.firstLanguage &&
      client.firstLanguage.toString() ===
        allLanguages.languages.None.toString())
  ) {
    errors.push("First Language is Required.");
  }

  // Validate Status if one property is set
  if (
    client.status &&
    (client.status.statusID ||
      client.status.statusExpireDate ||
      client.status.statusDocumerntID)
  ) {
    if (!client.status.statusID) {
      errors.push("Status Type is Required.");
    }
    if (!client.status.statusExpireDate) {
      errors.push("Status Expire Date is Required.");
    }
    if (!client.status.statusDocumerntID) {
      errors.push("Status Document ID is Required.");
    }
  }

  if (errors.length > 0) {
    return errors.join("\n");
  }

  return null;
};
