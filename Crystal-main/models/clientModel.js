const mongoose = require("mongoose");
const { newGuid } = require("../helpers/guid");

/***************** country Schema *********************/

const countrySchema = new mongoose.Schema({
  countryID: {
    type: Number,
    required: [true, "A country must have an ID"],
  },
  countryName: {
    type: String,
    required: [true, "A country must have a name"],
  },
});

/***************** Province Schema *********************/

const provinceSchema = new mongoose.Schema({
  provinceID: {
    type: Number,
    required: [true, "A province must have an ID"],
  },
  provinceName: {
    type: String,
    required: [true, "A province must have a name"],
  },
  country: {
    type: countrySchema,
    required: true,
  },
});

/***************** Passport Schema *********************/

const passportSchema = new mongoose.Schema({
  passportNumber: {
    type: String,
    required: [true, "A passport must have a passport number"],
  },
  issueDate: {
    type: Date,
    required: [true, "A passport must have an issue date"],
  },
  expireDate: {
    type: Date,
    required: [true, "A passport must have an expire date"],
  },
  placeOfBirth: {
    type: provinceSchema,
    required: true,
  },
  placeOfIssue: {
    type: provinceSchema,
    required: true,
  },
});

/***************** Language Schema *********************/

// const languageSchema = new mongoose.Schema({
//   languageID: {
//     type: Number,
//     required: [true, "A language must have an ID"],
//   },
//   languageName: {
//     type: String,
//     required: [true, "A language must have a name"],
//   },
// });

/***************** Client Schema *********************/
const clientSchema = new mongoose.Schema({
  clientId: {
    type: String,
    required: [true, "A client must have an ID"],
  },
  uci_number: {
    type: Number,
  },
  firstName: {
    type: String,
    trim: true,
    required: [true, "A client must have a first name"],
    maxlength: [
      50,
      "A client first name must have less or equal than 50 characters",
    ],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "A client must have a last name"],
    maxlength: [
      50,
      "A client last name must have less or equal than 50 characters",
    ],
  },
  gender: {
    type: String,
    trim: true,
    required: [true, "A client must have a gender"],
    maxlength: [
      10,
      "A client gender must have less or equal than 10 characters",
    ],
  },
  dob: {
    type: String,
  },
  phoneNumber: {
    type: String,
    trim: true,
    required: [true, "A client must have a phone number"],
    maxlength: [
      20,
      "A client phone number must have less or equal than 20 characters",
    ],
  },
  address: {
    type: String,
    trim: true,
    required: [true, "A client must have an address"],
    maxlength: [
      100,
      "A client address must have less or equal than 100 characters",
    ],
  },
  // passportNumber: {
  //   type: String,
  // },
  passport: {
    type: {
      passportNumber: {
        type: String,
        required: [true, "A passport must have a passport number"],
      },
      issueDate: {
        type: String,
        required: [true, "A passport must have an issue date"],
      },
      expireDate: {
        type: String,
        required: [true, "A passport must have an expire date"],
      },
      placeOfBirth: {
        type: String,
        required: true,
      },
      placeOfIssue: {
        type: String,
        required: true,
      },
    },
    // require: [true, "A passport is required"],
  },
  dateEntersCanada: {
    type: String,
  },
  firstLanguage: {
    type: Number,
  },
  email: {
    type: String,
    require: [true, "Email is required"],
  },
  countryOfCitizenShip: {
    type: String,
    required: true,
  },
  status: {
    type: {
      statusID: Number,
      statusExpireDate: String,
      statusDocumerntID: String,
    },
  },
  employeeID: {
    type: String,
    require: [true, "EmployeeID is required"],
  },
});

module.exports = mongoose.model("Client", clientSchema);
