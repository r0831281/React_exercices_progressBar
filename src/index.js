import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ProgressBar from './components/progress_bar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProgressBar color="green" progress="40"/>
    <ProgressBar color="blue" progress="60"/>
    <ProgressBar color="orange" progress="80"/>
    <ProgressBar color="yellow" progress="100"/>
    <ProgressBar color="red" progress="20"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
