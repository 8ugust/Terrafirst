import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='Terrafirst'>
    <Routes>
      <Route path='/' element={<App />}/>
    </Routes>
  </BrowserRouter>
);
