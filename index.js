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

if(process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
    const path= require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname , 'client','build','index.html'))
    })
}

app.listen(PORT, () => console.log(`${PORT} Running`));
