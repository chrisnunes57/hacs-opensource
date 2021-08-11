import firebase from "firebase";
const firebaseConfig = require("./_config").firebase;

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
