import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Project from './components/project';

ReactDOM.render(
    <Router>
        <Project />
    </Router>
    , document.getElementById('root'));

