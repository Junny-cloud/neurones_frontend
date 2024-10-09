// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Posts from './pages/Posts';
import CreatePost from './pages/CreatePost';

function App() {
    return ( <
        Router >
        <
        Routes >
        <
        Route path = "/register"
        element = { < Register / > }
        />  <
        Route path = "/login"
        element = { < Login / > }
        />  <
        Route path = "/posts"
        element = { < Posts / > }
        />  <
        Route path = "/posts/create"
        element = { < CreatePost / > }
        />  <
        /Routes> <
        /Router>
    );
}

export default App;