import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter } from 'react-router-dom';
import {Provider } from 'react-redux';
import {renderRoutes} from 'react-router-config';

import serialize from 'serialize-javascript'

import Routes from '../client/Routes';


const renderer = (request, store, context) =>{
    const content =  ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location = {request.path} context={context}>
                 <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );
    const HTML = `
    <html>
    <head>
    <body>
    <div id="root">${content}</div>
    <script>
    window.INITIAL_STATE=${serialize(store.getState())}
</script>
    <script src="bundle.js"></script>
</body>
</head>
    </html>
    `;

    return HTML;
}

export default renderer;


