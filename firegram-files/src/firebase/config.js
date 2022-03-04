import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtT29nVeZYx0SLrBOnTvBy36kIgCOvjeA",
  authDomain: "moments-d1e03.firebaseapp.com",
  projectId: "moments-d1e03",
  storageBucket: "moments-d1e03.appspot.com",
  messagingSenderId: "730991527434",
  appId: "1:730991527434:web:00e88664740f6aa8e901f3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };