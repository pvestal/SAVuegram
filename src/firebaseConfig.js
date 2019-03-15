import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyCzWQ8aJ6OJfcKG9ZKiDRr6r32-iNWG1AY",
    authDomain: "this-blog-app.firebaseapp.com",
    databaseURL: "https://this-blog-app.firebaseio.com",
    projectId: "this-blog-app",
    storageBucket: "this-blog-app.appspot.com",
    messagingSenderId: "87329761057"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()
const currentUser = auth.currentUser

// // date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    googleProvider,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}
