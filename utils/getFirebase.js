import firebase from "firebase/app";
import firebaseConfig from "../firebase.config";

export default function getFirebase() {

  if (firebase.getApps().length === 0) return firebase.initializeApp(firebaseConfig);

  return firebase.getApp();
};