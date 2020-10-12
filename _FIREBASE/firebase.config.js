import FIREBASE from "firebase"
import {
  apiKey,
  authDomain,
  databaseURL,
  projectId, 
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
} from "@env";

const firebaseConfig = {
    apiKey,
    authDomain,
    databaseURL,
    projectId ,
    storageBucket ,
    messagingSenderId,
    appId,
    measurementId,
  };

  const firebase  = FIREBASE.initializeApp(firebaseConfig)

  export default firebase

