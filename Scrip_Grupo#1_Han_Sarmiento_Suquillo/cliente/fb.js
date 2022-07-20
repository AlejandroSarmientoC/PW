import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";

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

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
    export const saveTask = (title, description) =>
    addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
    onSnapshot(collection(db, "tasks"), callback);

/**
*
* @param {string} id Task ID
*/
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
    updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));