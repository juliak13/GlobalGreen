    import { on } from 'events';
import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
    import {getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
    import {getFirestore} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

    // Firebase config object (from your Firebase project)
    const firebaseApp = initializeApp ({
        apiKey: "AIzaSyAg8oneWOqeYsz4G_E_3VEcBb19l7QlwVA",
        authDomain: "global-green-dc846.firebaseapp.com",
        projectId: "global-green-dc846",
        storageBucket: "global-green-dc846.firebasestorage.app",
        messagingSenderId: "392990661986",
        appId: "1:392990661986:web:992e1ff8089c32dd61e03b"
  });

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);


onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log('logged in!');
    } else {
        console.log('no user');
    }
})