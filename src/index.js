import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from 'firebase';
import 'firebase/firestore';


require('firebase/firestore');




var firebaseConfig = {
    apiKey: "AIzaSyAiuPJ8yCfusy5uBae-JMTiLQvkCnZ18Jw",
    authDomain: "evernoteclone2-526c4.firebaseapp.com",
    projectId: "evernoteclone2-526c4",
    storageBucket: "evernoteclone2-526c4.appspot.com",
    messagingSenderId: "106406091995",
    appId: "1:106406091995:web:fcd347099622b11d3140fe",
    measurementId: "G-S29FZHMM45"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




ReactDOM.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>,
    document.getElementById('evernote-container'),
)