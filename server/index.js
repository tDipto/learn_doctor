const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const home = require("./routers/home");
require("./database/databaseConnection");
var cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
/* app.use(express.static("../pictures")); */
/* app.use(fileUpload()); */
app.use("/pictures", express.static(path.join(__dirname, "/pictures")));

// router
app.use("/", home);

app.listen(PORT, () => console.log(`${PORT} Running`));
