import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
firebase.initializeApp(firebaseConfig);

export const googleSignIn = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      var user = result.user;
      return user;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const jwtoken = () => {
  firebase
    .auth()
    .currentUser.getIdToken(/* forceRefresh */ true)
    .then(function (idToken) {
      /* console.log(idToken); */
      sessionStorage.setItem("token", idToken);
    })
    .catch(function (error) {
      // Handle error
    });
};
