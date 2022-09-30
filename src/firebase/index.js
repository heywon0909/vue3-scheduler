import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApwE-3Ss-dCJZzsFjGwssm-uVhz5wAiUw",
  authDomain: "vue3-study-85437.firebaseapp.com",
  projectId: "vue3-study-85437",
  storageBucket: "vue3-study-85437.appspot.com",
  messagingSenderId: "926858559726",
  appId: "1:926858559726:web:845a813ccb768f618e73ff",
  measurementId: "G-WQ3HNG300Q"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

export const USER_COLLECTION = db.collection("users")
export const PLAN_COLLECTION = db.collection("plans")
