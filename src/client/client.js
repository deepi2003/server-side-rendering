
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';

ReactDOM.hydrate(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>, document.getElementById('root'))

console.log('Hi There !');