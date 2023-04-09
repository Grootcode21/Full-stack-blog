import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD8epMXb3oKPz4poR7XViC4clsKpeE1n-I",
  authDomain: "my-react-blog-cdee6.firebaseapp.com",
  projectId: "my-react-blog-cdee6",
  storageBucket: "my-react-blog-cdee6.appspot.com",
  messagingSenderId: "751461117474",
  appId: "1:751461117474:web:0b4a82adc10b88ce6be47b"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
