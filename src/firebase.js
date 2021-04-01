import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB4yKBLRtXyuxny61oz7objBmf4Ulv7s3M",
  authDomain: "jobs-app-54451.firebaseapp.com",
  projectId: "jobs-app-54451",
  storageBucket: "jobs-app-54451.appspot.com",
  messagingSenderId: "117457502720",
  appId: "1:117457502720:web:cd076a615358ed80094ee5",
  measurementId: "G-MN520S9R3L"
};

const app = firebase.apps.length === 0
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

const auth = app.auth()

const GoogleProvider = new firebase.auth.GoogleAuthProvider()

const GitHubProvider = new firebase.auth.GithubAuthProvider()

export {
  db,
  auth,
  GoogleProvider,
  GitHubProvider,
}