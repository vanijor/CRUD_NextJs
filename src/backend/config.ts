import firebase from 'firebase'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    /* storageBucket: "next-crud-3be4b.appspot.com",
    messagingSenderId: "18281566162",
    appId: "1:18281566162:web:12ab1267fb06693c6a820b" */
  })
}

export default firebase