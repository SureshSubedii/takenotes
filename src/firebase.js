import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBwcig9IICHTNU4dU7CQV8ajAXaXkrgUFo",
  authDomain: "keep-notes-49871.firebaseapp.com",
  projectId: "keep-notes-49871",
  storageBucket: "keep-notes-49871.appspot.com",
  messagingSenderId: "1023853919662",
  appId: "1:1023853919662:web:390d4ee14d93d1d9c89c3f"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth()
export{db,auth}