import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';

import Home from '../client/components/Home';


const renderer = (request) =>{
    const content =  ReactDOMServer.renderToString(
        <StaticRouter location = {request.path} context={{}}>
            <Routes/>
        </StaticRouter>
    );
    const HTML = `
    <html>
    <head>
    <body>
    <div id="root">${content}</div>
    <script src="bundle.js"></script>
</body>
</head>
    </html>
    `;

    return HTML;
}

export default renderer;


