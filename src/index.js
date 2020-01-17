import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import './reset.css'

// Remember to add router

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);