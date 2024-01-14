const express = require("express");
const bodyParser = require("body-parser");
const adminRouts = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");
const errorController = require("./controller/error");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views"); // this is not necessary if the views are stored in views dir

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRouts);
app.use(shopRoutes);

app.use("/", errorController.get404);
app.listen(3000);
