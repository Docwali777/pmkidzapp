import FIREBASE from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCXq6RufVSrb491ci9gH6k1PigoFUZ-8mc",
    authDomain: "pmkidzapp-618b5.firebaseapp.com",
    databaseURL: "https://pmkidzapp-618b5.firebaseio.com",
    projectId: "pmkidzapp-618b5",
    storageBucket: "pmkidzapp-618b5.appspot.com",
    messagingSenderId: "410559069452",
    appId: "1:410559069452:web:fb3d7976cd8f752cea9d29",
    measurementId: "G-QXPZ7SN7B9"
  };

  const firebase  = FIREBASE.initializeApp(firebaseConfig)

  export default firebase