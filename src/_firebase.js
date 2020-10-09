import app from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTq5SCPW2IGGmhz32ErX3Q8HRrdTBXJPA",
  authDomain: "hacs-opensource.firebaseapp.com",
  databaseURL: "https://hacs-opensource.firebaseio.com",
  projectId: "hacs-opensource",
  storageBucket: "hacs-opensource.appspot.com",
  messagingSenderId: "213041163103",
  appId: "1:213041163103:web:abee18085d83297ba0e4ea",
  measurementId: "G-F1WKE4VRDS",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
  }
}

export default Firebase;
