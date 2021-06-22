import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDXygq4xM7bwhjwffugxKAnBYleViF4vwY",
  authDomain: "shamanook-video-share.firebaseapp.com",
  projectId: "shamanook-video-share",
  storageBucket: "shamanook-video-share.appspot.com",
  messagingSenderId: "496335962918",
  appId: "1:496335962918:web:ce897236e56904242cb7e7",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
