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

    // console.log(matchRoutes(Routes, req.path));

    const promises = matchRoutes(Routes, req.path).map( ( {route} ) =>{
        return route.loadData ? route.loadData(store): null;
    });

    // console.log(promises);

    const allPromisses = Promise.all(promises);
    allPromisses.then(()=>{
        res.send(renderer(req, store));
    });


});
app.listen(3000, () =>{
    console.log(' Listening on port 3000')
});
