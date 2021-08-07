const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema({
  languageID: {
    type: Number,
    required: [true, "A language must have an ID"],
  },
  languageName: {
    type: String,
    required: [true, "A language must have a name"],
  },
});

const Language = mongoose.model("Language", languageSchema);
module.exports = Language;
