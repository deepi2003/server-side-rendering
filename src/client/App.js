import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchUsers } from './actions';

const App = ({ route }) => {
    return (
        <div>
            <Header />
            {renderRoutes(route.routes)}
        </div>
    );
};

// const App = ({route} ) =>{
//     return <div><h1> HEADER</h1>
//         {renderRoutes(route.routes)}</div>
// }

export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchUsers())
};