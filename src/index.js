

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Home from './client/components/Home';
// const express = require('express');
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const Home = require('./client/components/Home').default;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res)=>{
    const content = ReactDOMServer.renderToString(<Home/>);
    const HTML = `
    <html>
    <head>
    <body>
    <div>${content}</div>
    <script src="bundle.js"></script>
</body>
</head>
    </html>
    `;

    res.send(HTML);

});
app.listen(3000, () =>{
    console.log(' Listening on port 3000')
});
