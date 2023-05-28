import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const SETTINGS = {
  config: {
    live: {
        apiKey: "AIzaSyDVXDCW1CicB71IK06E10vtNGxE55khnPI",
        authDomain: "portfolio-38ceb.firebaseapp.com",
        projectId: "portfolio-38ceb",
        storageBucket: "portfolio-38ceb.appspot.com",
        messagingSenderId: "353964196019",
        appId: "1:353964196019:web:6457793774b8611d7f30c6",
        measurementId: "G-NHKXZ7D6Q2"
    },
    // staging: {
    //   apiKey: "AIzaSyC9vPtsdALsf3s4uo7wIjDYLPeNfckwX-g",
    //   authDomain: "medisure-staging-fb69b.firebaseapp.com",
    //   projectId: "medisure-staging-fb69b",
    //   storageBucket: "medisure-staging-fb69b.appspot.com",
    //   messagingSenderId: "262151072936",
    //   appId: "1:262151072936:web:b4dd2910cb3df1b3c6e69d",
    //   measurementId: "G-EBE806VRHZ",
    // },
  },
};

// Initialize Firebase
export const appDb = initializeApp(SETTINGS.config.live);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(appDb);

// Initialize Firebase storage
export const storage = getStorage(appDb);

export function onAuthStateChanged(user: any) {
  if (user) {
    // User logged in
  } else {
    // User logged out
  }
}
