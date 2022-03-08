// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").load();
// }
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");

mongoose
  .connect("mongodb://localhost:27017/Mybrary")
  .then(() => console.log("connection successful..........."))

  .catch((err) => console.log(err));
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to mongoose"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
