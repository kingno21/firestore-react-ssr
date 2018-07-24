import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'
import 'firebase/firestore'


const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

const firebaseConfig = {
  apiKey: `${process.env.apiKey}`,
  authDomain: `${process.env.authDomain}`,
  databaseURL: `${process.env.databaseURL}`,
  projectId: `${process.env.projectId}`,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

if (!firebase.apps.length) {
  // Initialize firebase instance
  firebase.initializeApp(firebaseConfig)

  // Initialize other services on firebase instance
  const firestore = firebase.firestore()
  const settings = {
    timestampsInSnapshots: true,
  }
  firestore.settings(settings)
}

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

// Create store with reducers and initial state
const initialState = {}
var store = null

if (isServer) {
  // Always make a new store if server, otherwise state is shared between requests
  store = createStoreWithFirebase(rootReducer, initialState)
} else if (!window[__NEXT_REDUX_STORE__]) {
  // Create store if unavailable on the client and set it on the window object
  window[__NEXT_REDUX_STORE__] = createStoreWithFirebase(rootReducer, initialState)
  store = window[__NEXT_REDUX_STORE__]
}

export default store
