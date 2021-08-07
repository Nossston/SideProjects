// const mongoose = require("mongoose");
// const { Schema } = mongoose;
// const { ObjectId } = Schema;
// const { Province } = require("./provinceModel.js");

// const passportSchema = new mongoose.Schema({
//   passportNumber: {
//     type: String,
//     required: [true, "A passport must have a passport number"],
//   },
//   issueDate: {
//     type: Date,
//     required: [true, "A passport must have an issue date"],
//   },
//   expireDate: {
//     type: Date,
//     required: [true, "A passport must have an expire date"],
//   },
//   placeOfBirth: {
//     type: ObjectId,
//     required: true,
//     ref: Province,
//   },
//   placeOfIssue: {
//     type: ObjectId,
//     required: true,
//     ref: Province,
//   },
// });

// const Passport = mongoose.model("Passport", passportSchema);
// module.exports = Passport;
