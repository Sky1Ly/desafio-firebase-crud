// Import the functions you need from the SDKs you need
import { initializeApp, getFirestore } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFeQzWf_mTDFIf2bBTffwQ4XIgo7_DHFc",
    authDomain: "vue-crud-5455a.firebaseapp.com",
    projectId: "vue-crud-5455a",
    storageBucket: "vue-crud-5455a.appspot.com",
    messagingSenderId: "86012008295",
    appId: "1:86012008295:web:ccaafe5db7bd519abb01c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };