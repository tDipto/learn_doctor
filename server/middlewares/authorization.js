const admin = require("firebase-admin");
var serviceAccount = require("./doctor-verify.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const verifyToken = (req, res, next) => {
  const bearer = req.headers.authorization;
  /* console.log(bearer); */
  if (bearer) {
    const idToken = bearer.split(" ")[1];
    admin
      .auth()
      .verifyIdToken(idToken)
      .then((decodedToken) => {
        const uid = decodedToken.uid;
        console.log(uid);
        res.cookie("loginToken", uid);
        next();
      })
      .catch((error) => {
        console.error(error);
        res.status(401).send(error.message);
      });
  } else {
    res.status(401).send("UNAUTHORIZED");
  }
};

module.exports = verifyToken;
