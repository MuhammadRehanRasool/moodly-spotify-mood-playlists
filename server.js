const express = require("express");
const router = express.Router();
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const dataRoute = require("./routes/dataRoute");
const documentRoute = require("./routes/documentRoute");

const cors = require("cors");
const port = process.env.PORT || 4000;

const uri = "REDACTED_MONGODB_URI";

dotenv.config();
mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("Database connected...");
  }
);

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));
app.use("/data", dataRoute);
app.use("/document", documentRoute);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  // res.send("Hey, I'm backend!");
});

app.listen(port, () => {
  console.log("Backend is running....");
});
