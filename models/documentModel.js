const mongoose = require("mongoose");

const documentModel = new mongoose.Schema({
  address: {
    type: Array,
  },
  addedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("documents", documentModel);
