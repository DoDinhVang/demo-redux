import React from 'react';
import Like from './Like/Like';

import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import firebaseConfig from './fireBaseConfig';
import 'firebase/auth'

function App(props:any) {
  const {
    user,
    signOut,
    signInWithGoogle,
  } = props;

  console.log(user)
  return (


    <div>
      {user? <Like />: 
       <div style={{display: 'flex'}}>
            <button style={{marginRight: '40px'}} onClick={signInWithGoogle}>Sign in with Google</button>
            <button onClick={signOut}>or Sign out</button>
       </div>}
    
     
    </div>
  );
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAppAuth = firebaseApp.auth()
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
}
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);