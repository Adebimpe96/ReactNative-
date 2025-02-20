import { initializeApp } from 'firebase/app'
// import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAXub8KmkWS3YV7rp0hDEzg7XAhUYRgRn4',
  authDomain: 'mytodoapp-41e9c.firebaseapp.com',
  projectId: 'mytodoapp-41e9c',
  storageBucket: 'mytodoapp-41e9c.firebasestorage.app',
  messagingSenderId: '916466944635',
  appId: '1:916466944635:web:965b6080a0859867f7f0de',
  measurementId: 'G-J64SL06HD6',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// export const Auth = getAuth(app)
// export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
