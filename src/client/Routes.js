import React from 'react';

import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';

import App from './App';

export default [
    {
        ...App,
        routes:[
            {
                path:'/',
                ...HomePage,
                exact:true
            },
            {
                ...UsersListPage,
                path:'/users',
                exact:true
            },
            {
                ...NotFoundPage
            }
        ]
    }

];
