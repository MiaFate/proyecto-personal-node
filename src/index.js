require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
//connecting to DB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(db => console.log('Db conectada'))
.catch(err => console.log(err));
//settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
//middlewares
app.use(express.urlencoded({ extended: false }));
//routes
app.use(require("./routes/index.js"));
//static files
app.use(express.static(path.join(__dirname, "public")));
//listening the server

app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
