import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDYeOurJ4X8Kb_dEQPCh2OM9IlpNQVkSc8",
  authDomain: "game-db-ecbc6.firebaseapp.com",
  projectId: "game-db-ecbc6",
  storageBucket: "game-db-ecbc6.appspot.com",
  messagingSenderId: "758236328395",
  appId: "1:758236328395:web:0e38460d13c23e1810064e"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);


export default fire;
