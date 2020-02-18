import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
 const config = {
   apiKey: "AIzaSyD7grk4aTWf2cZgFzlwiw3pwB-LoT-Gqug",
   authDomain: "pandoranoha-ko.firebaseapp.com",
   databaseURL: "https://pandoranoha-ko.firebaseio.com",
   projectId: "pandoranoha-ko",
   storageBucket: "pandoranoha-ko.appspot.com",
   messagingSenderId: "935248899463",
   appId: "1:935248899463:web:876090f98e5c222c2bb722",
   measurementId:"G-C86KBTCTW9"
 }
 firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
 firebase,
 db
}