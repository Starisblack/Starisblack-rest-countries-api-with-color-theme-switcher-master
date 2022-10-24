import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from "./components/Navbar";
import App from './components/App';
import SingleCountry from "./components/SingleCountry"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter >
  <Navbar />
  <Routes>
    <Route path="/:countryName" element={<SingleCountry/>} />
    <Route path="/" exact element={<App />} />
  </Routes>
</BrowserRouter>
  </React.StrictMode>
);
