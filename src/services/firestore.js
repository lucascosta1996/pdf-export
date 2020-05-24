import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const authenticateAnonymously = () => {
  return firebase.auth().signInAnonymously();
};

export const getManufacturers = async () => {
  const snapshot = await firebase.firestore().collection('manufacturers').get()
  return snapshot.docs.map(doc => doc.data());
};

export const createManufacturers = (manufacturerName) => {
  return db.collection('manufacturers')
      .add({
          created: firebase.firestore.FieldValue.serverTimestamp(),
          name: manufacturerName
      });
};
