import React, { Component } from 'react';
import Album     from './pages/Album';
import Artist     from './pages/Artist';
import HomePage     from './pages/HomePage';
import Notfound     from './pages/Notfound';

const routes = [
    {
        path:'/',
        exact : true,
        main : () => <HomePage />
    },
    {
        path:'/album/:id',
        exact : true,
        main : ({match}) => <Album match={match}/>
    },
    {
        path:'/artist/:id',
        exact : true,
        main : ({match}) => <Artist match={match}/>
    },
    {
        path:'',
        exact : false,
        main : () => <Notfound />
    },
];
export default routes;