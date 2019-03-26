import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBIdSx6ELtIHWPiFQEtP9_r0k_hNa1zvTk",
  authDomain: "react-chat-x-firebase.firebaseapp.com",
  databaseURL: "https://react-chat-x-firebase.firebaseio.com",
  projectId: "react-chat-x-firebase",
  storageBucket: "react-chat-x-firebase.appspot.com",
  messagingSenderId: "9464653557"
};

firebase.initializeApp(config);



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
