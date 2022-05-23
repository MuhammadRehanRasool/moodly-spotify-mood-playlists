const mongoose = require("mongoose");

const dataModel = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  mood: {
    type: Array,
  },
  addedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("datas", dataModel);
