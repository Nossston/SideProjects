const mongoose = require("mongoose");
const {newGuid} = require("../helpers/guid");
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
    maxlength: [20, "An employee SIN must have only 9-11 characters"],
    // default: "000-000-000",
    // unique
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
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
  // email verification variable
  isVerified: {
    type: Boolean,
    default: false,
  },
  salary: {type: String},
  commission: {type: String},
  hireDate: {type: String},
  isManager: {type: Boolean, default: false},
  password: {
    type: String,
    required: true,
  },
  positionID: String,
  positionName: {type: String, default: "Employee"},
});
const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
