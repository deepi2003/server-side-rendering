import 'babel-polyfill';

import express from 'express';
import {matchRoutes} from 'react-router-config';


import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import Routes from './client/Routes';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res)=>{
    const store = createStore();

    const promises = matchRoutes(Routes, req.path).map( ( {route} ) =>{
        return route.loadData ? route.loadData(store): null;
    });
    const context = {}
    const allPromisses = Promise.all(promises);
    allPromisses.then(()=>{
        const content = renderer(req, store, context);

        if(context.notFound) {
            res.status(404);
        }
        res.send(content);

    });


});
app.listen(3000, () =>{
    console.log(' Listening on port 3000')
});
