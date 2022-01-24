import React from 'react';
import Like from './Like/Like';

// import withFirebaseAuth from 'react-with-firebase-auth'
// import firebase from 'firebase/app';
// import firebaseConfig from './fireBaseConfig';
// import 'firebase/auth'

import { useDispatch, useSelector } from 'react-redux'
import { State } from './redux/configStore';
import { decre } from './redux/action-creator';

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCtwNrTceZGwOAaBVAmymXVG_PXnOiWg24",
  authDomain: "fir-fb-bb9b4.firebaseapp.com",
  projectId: "fir-fb-bb9b4",
  storageBucket: "fir-fb-bb9b4.appspot.com",
  messagingSenderId: "38582433571",
  appId: "1:38582433571:web:c7c44de6447319485ffe96",
  measurementId: "G-ZHSXVPYCLC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const getusers = db.collection("users").get().then((data:any) => {
 
  data.forEach((doc:any) => {
      console.log(doc.data())
  });
});
console.log('getUser', getusers)


export default function App(props: any) {
 


  const { number } = useSelector((state: State) => state.counterReducer)
  const dispatch = useDispatch();
  return (

    <div>
      <div>
        <p>{number}</p>
        <p onClick={() => {
          dispatch(decre())
        }}>+</p>
      </div>

    </div>
  );
}
// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const firebaseAppAuth = firebaseApp.auth()
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
// }
// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth,
// })(App);