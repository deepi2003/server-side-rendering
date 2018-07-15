import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Home from '../client/components/Home';

const renderer = () =>{
    const content = ReactDOMServer.renderToString(<Home/>);
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


