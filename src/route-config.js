import React from 'react';
import AboutPage from './Pages/AboutPage';
import BlogPage from './Pages/BlogPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import UserPage from './Pages/UserPage';
import NotFoundPage from './Pages/NotFoundPage';

const routes = [
    {
      path: "/",
      exact: true,
      main: () => <HomePage />
    },
    {
        path: "/blog",
        exact: true,
        main: () => <BlogPage />
      },
    {
        path: "/about",
        exact: true,
        main: () => <AboutPage />
    },
    {
        path: "/login",
        exact: true,
        main: () => <LoginPage />
    },
    {
        path: "/userPage",
        exact: true,
        main: () => <UserPage />
    },
    {
        path: "",
        exact: false,
        main: () => <NotFoundPage />
    },
];
export default routes;