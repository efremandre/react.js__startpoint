import About from "../pages/About.jsx";
import React from "react";
import PostIdPage from "../components/PostIdPage.jsx";
import PostsPage from "../pages/PostsPage.jsx";
import Login from "../pages/Login.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import {Navigate} from "react-router-dom";


export const routerPrivate = [
    {path: '/', element: <About />},
    {path: '/about', element: <About />},
    {path: '/posts', element: <PostsPage />},
    {path: '/posts/:id', element: <PostIdPage />},
    {path: '*', element: <PageNotFound />},
    {path: '/login', element: <Navigate to='/about' replace />},
];

export const routerPublic = [
    {path: '/login', element: <Login />},
    {path: '*', element: <Navigate to='/login' replace />},
]
