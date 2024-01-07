import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Coin from './pages/Coin';
import Header from './components/Header';
import './styles/style.scss';
import './styles/about-us.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<Home />} />
      <Route path='/:id' element={<Coin />} />
    </Routes>
  </BrowserRouter>
);