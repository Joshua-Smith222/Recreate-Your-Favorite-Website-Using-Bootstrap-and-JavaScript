// main.jsx or index.js
//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import App from './App';
//import { BrowserRouter as Router } from 'react-router-dom';
//import './index.css';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <Router>
 //   <App />
 // </Router>
//);
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
