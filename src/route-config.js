import React, { Component } from 'react';
import HomePage     from './pages/Home';
import ThuTuc       from './pages/ThuTuc';
const routes = [
    {
        path:'/',
        exact : true,
        main : () => <HomePage />
    },
    {
        path:'/thutuc',
        exact : true,
        main : ({match}) => <ThuTuc match={match}/>
    },
];
export default routes;