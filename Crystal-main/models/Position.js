const mongoose = require("mongoose");
const {newGuid} = require("../helpers/guid");

const positionSchema = new mongoose.Schema({
  positionId: {type: String},
  positionName: {type: String},
  description: {type: String},
});
const Position = mongoose.model("Position", positionSchema);
module.exports = Position;
