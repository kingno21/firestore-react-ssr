import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'
import 'firebase/firestore'


const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

// your firestore config
const firebaseConfig = {};

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)

  const firestore = firebase.firestore()
  const settings = {
    timestampsInSnapshots: true,
  }
  firestore.settings(settings)
}

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore)

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

const initialState = {}
var store = null

if (isServer) {
  store = createStoreWithFirebase(rootReducer, initialState)
} else if (!window[__NEXT_REDUX_STORE__]) {
  window[__NEXT_REDUX_STORE__] = createStoreWithFirebase(rootReducer, initialState)
  store = window[__NEXT_REDUX_STORE__]
}

export default store
