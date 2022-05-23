const mongoose = require("mongoose");

const dataModel = new mongoose.Schema({
  name: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  note: {
    type: String,
  },
  addedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("datas", dataModel);