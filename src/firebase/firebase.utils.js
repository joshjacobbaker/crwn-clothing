import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBFsMdzBFm7Yyjt2ICRwlz5xECDpB7GPJU",
    authDomain: "crwn-db-b7ac2.firebaseapp.com",
    projectId: "crwn-db-b7ac2",
    storageBucket: "crwn-db-b7ac2.appspot.com",
    messagingSenderId: "825245461666",
    appId: "1:825245461666:web:6f0c0f4f2b558a4b367bfb",
    measurementId: "G-S7TE0JKDZ3"
  }

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase