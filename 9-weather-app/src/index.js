import React from 'react';
import ReactDOM from 'react-dom';
// imports app and renders it at the root in index.html, which has the entire <body> tag w/ class of 'root'
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
