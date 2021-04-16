import firebase from 'firebase'

if(!firebase.apps.length){
    let firebaseConfig = {
        apiKey: process.env.FIREBASE_APIKEY,
        authDomain: process.env.FIREBASE_AUTHDOMEIN,
        projectId: process.env.FIREBASE_PROJECTID,
        storageBucket: process.env.FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
        appId: process.env.FIREBASE_APPID,
        measurementId: process.env.FIREBASE_MEASUREMENTID
    };
    firebase.initializeApp(firebaseConfig)

}
export default firebase