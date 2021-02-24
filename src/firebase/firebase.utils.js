import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBMCg9WrJ_Vn1gsjhFnoyje7-ziobtV2J0",
    authDomain: "crwn-db-fb71e.firebaseapp.com",
    projectId: "crwn-db-fb71e",
    storageBucket: "crwn-db-fb71e.appspot.com",
    messagingSenderId: "297664005636",
    appId: "1:297664005636:web:d6516248eb096bd9ff5751",
    measurementId: "G-YQQHZ5B1BW"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists){
      const {displayName, email} = userAuth
      const createdAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error){
        console.log('error creating user', error.message)

      }

    }

    return userRef

  }

  firebase.initializeApp(config)


  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase