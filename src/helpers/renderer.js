import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter } from 'react-router-dom';
import {Provider } from 'react-redux';
import Routes from '../client/Routes';


const renderer = (request, store) =>{
    const content =  ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location = {request.path} context={{}}>
                 <Routes/>
            </StaticRouter>
        </Provider>
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


