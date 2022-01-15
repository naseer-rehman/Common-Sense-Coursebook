import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}