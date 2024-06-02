//c style language intergrated with html
import React from 'react';
import { useLocation } from "react-router";
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(
  //the line below grabs the root id in public folder;
  //index.html
  //document is a global object that references document/object model
  //document object provides low level apis that allow you to 
  //add/remove/update content and inject it into root
  document.getElementById('root') as HTMLElement
);

  //once the root has been collected... render "App"
  //what is "App"?, App is a function imported from file:
  //"App.tsx", the file ending is optional.. go inside
  //file "App.tsx" to see more about the App function grabbed
  //App Function returns what we see in browser, function
  //executes, spits out html, and gets combined with other
  //content and content gets rendered into "root", root = index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
