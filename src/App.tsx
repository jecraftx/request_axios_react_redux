import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import Post from './pages/Post';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home />}>
      </Route>

      <Route path="/post" element={<Post />}>
      </Route>

      <Route path="/user" element={<User />}>
      </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
