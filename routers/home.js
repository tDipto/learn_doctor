const express = require("express");
const { Appointment, Doctor } = require("../database/databaseModel");
const route = express.Router();
var mongoose = require("mongoose");
const verifyToken = require("../middlewares/authorization");
const multer = require("multer");
const fs = require("fs");
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, `pictures`);
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

route.get("/", (req, res) => {
  res.send("hi");
});

route.get("/bookedAllAppointment", verifyToken, async (req, res) => {
  try {
    await Appointment.find({}, (err, docs) => {
      if (err) {
        res.status(404).send(err.message);
      } else {
        res.send(docs);
      }
    });
  } catch (err) {
    res.status(404).send(err.message);
  }
});

route.post("/addDoctor", upload.single("picture"), async (req, res) => {
  /*  const file = req.files.dp1; */
  const name = req.body.name;
  const email = req.body.email;
  const img = fs.readFileSync(`./pictures/${req.file.originalname}`);
  const img64 = img.toString("base64");

  const picture = {
    contentType: req.file.mimetype,
    size: req.file.size,
    img: Buffer.from(img64, "base64"),
  };

  /* console.log(picture); */
  const newDoctor = new Doctor({ name, email, pic: picture });

  try {
    newDoctor.save();
    fs.unlinkSync(`./pictures/${req.file.originalname}`, (err) => {
      if (err) {
        console.log(err.message);
      }
    });
  } catch (err) {
    console.error(err.message);
  }
});

route.get("/showAllDoctors", async (req, res) => {
  try {
    Doctor.find({}, (err, docs) => {
      if (err) {
        res.status(404).send(err.message);
      } else {
        res.send(docs);
      }
    });
  } catch (err) {
    res.status(404).send(err.message);
  }
});

route.put("/updateStatus/:id", verifyToken, async (req, res) => {
  console.log(req.body, req.params.id);
  const id = mongoose.Types.ObjectId(req.params.id);
  try {
    const update = await Appointment.findOneAndUpdate({ _id: id }, req.body);
    /*  console.log(update); */
  } catch (err) {
    res.status(404).send(err.message);
    /*  console.log(err.message); */
  }
});
route.post("/bookAppointment", async (req, res) => {
  const newAppointment = new Appointment(req.body);

  try {
    await newAppointment.save();
  } catch (err) {
    res.status(404).send(err.message);
  }
});

route.get("/bookedAppointment", async (req, res) => {
  try {
    await Appointment.find(
      { appointmentTime: req.query.appointmentTime },
      (err, docs) => {
        if (err) {
          res.status(404).send(err.message);
        } else {
          res.send(docs);
        }
      }
    );
  } catch (err) {
    res.status(404).send(err.message);
  }
});

route.get("/admin", async (req, res) => {
  /* console.log(req.query.email); */
  try {
    await Doctor.find({ email: req.query.email }, (err, docs) => {
      if (err) {
        res.status(404).send(err.message);
      } else {
        console.log(docs.length);
        res.send(docs.length > 0);
      }
    });
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = route;
