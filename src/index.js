import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Blogs from './Blogs'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/Blogs" element={<Blogs />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

