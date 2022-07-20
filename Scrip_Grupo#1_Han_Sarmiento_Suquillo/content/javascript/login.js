// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithRedirect, getRedirectResult} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMN0XlGEQFq1AAJr8tUBjWSVt1mQrpfW4",
    authDomain: "pw-b125c.firebaseapp.com",
    databaseURL: "https://pw-b125c-default-rtdb.firebaseio.com",
    projectId: "pw-b125c",
    storageBucket: "pw-b125c.appspot.com",
    messagingSenderId: "835370348311",
    appId: "1:835370348311:web:501ffad847811818199152",
    measurementId: "G-V2Z4ZXKEBF"
};


const irPaginaInicio = () => {
    window.location.href = '/cliente/index.html';
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#pass').value;

    signInWithEmailAndPassword(auth, email, password)
        .then( (userCredential) => {
            const user = userCredential.user;
            console.log(`Bienvenido ${user.email}`);

            irPaginaInicio();
        })
        .catch( (error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
        })

})

gogFB.addEventListener('click', (e) => {
    e.preventDefault();

    signInWithRedirect(auth, provider)

    getRedirectResult(auth)
        .then( (result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            const user = result.user;
        })
        .catch( (error) => {
            const errorCode = error.code;

            alert(errorCode);
        })

})