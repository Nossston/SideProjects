const mongoose = require("mongoose");
const { newGuid } = require("../helpers/guid");

/*********************** EMPLOYEES ***********************/

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: [true, "An employee must have an ID"],
    default: newGuid(),
  },
  firstName: {
    type: String,
    trim: true,
    required: [true, "An employee must have a first name"],
    maxlength: [
      50,
      "An employee first name must have less or equal than 50 characters",
    ],
  },
  lastName: {
    type: String,
    trim: true,
    // required: [true, "An employee must have a last name"],
    maxlength: [
      50,
      "An employee last name must have less or equal than 50 characters",
    ],
  },

  SIN: {
    type: String,
    trim: true,
    // required: [true, "An employee must have a SIN number"],
    maxlength: [9, "An employee phone number must have only 9 characters"],
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
    // required: [true, "An employee must have a phone number"],
    maxlength: [
      20,
      "An employee phone number must have less or equal than 20 characters",
    ],
  },
  address: {
    type: String,
    trim: true,
    // required: [true, "An employee must have an address"],
    maxlength: [
      100,
      "An employee address must have less or equal than 100 characters",
    ],
  },

  Salary: Number,
  Address: String,
  Commission: String,
  HireDate: String,
  ManagerID: String,
  UserName: String,
  password: {
    type: String,
    required: true,
  },
  PositionID: String,
});

/*********************** CLIENTS ***********************/

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
    default: newGuid(),
  },
  uci_number: {
    type: Number,
    required: true,
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
    type: Date,
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
        type: Date,
        required: [true, "A passport must have an issue date"],
      },
      expireDate: {
        type: Date,
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
    type: Date,
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
      statusExpireDate: Date,
      statusDocumerntID: String,
    },
  },
  // employeeID: {
  //   type: String,
  //   require: [true, "EmployeeID is required"],
  // },
});

/*********************** SUB CASE TYPES ***********************/

const CaseTypes = mongoose.Schema;

const CaseTypeSchema = new CaseTypes({
  caseType: {
    type: String,
    required: true,
  },
  subCaseType: {
    type: String,
    required: true,
  },
});

//const Case = mongoose.model('Case', CaseTypeSchema);

/*********************** PAYMENTS ***********************/

const Payments = mongoose.Schema;

const PaymentSchema = new Payments({
  paymentID: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  method: {
    type: String,
  },
});

//const Payment = mongoose.model('Payment', PaymentSchema);

/*********************** APPLICATIONS ***********************/

const Applications = mongoose.Schema;

const AppSchema = new Applications({
  client: {
    type: clientSchema,
  },
  agent: {
    type: employeeSchema,
  },
  subCaseType: {
    type: String,
  },
  contractID: {
    type: String,
  },
  contractDate: {
    type: String,
  },
  payment: {
    type: {
      paymentID: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      method: {
        type: String,
      },
    },
  },
  appStatus: {
    type: Number,
  },
  submitDate: {
    type: String,
  },
  notes: {
    type: String,
  },
});

const App = mongoose.model("App", AppSchema);

module.exports = App;
