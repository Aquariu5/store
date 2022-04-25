import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Suggestions from './components/Suggestions';
import Types from './components/Types';
import { Container } from 'react-bootstrap';
import Brands from './components/Brands';
import Devices from './components/Devices';
import Shop from './components/Shop';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/router/AppRouter';
import init from './components/init/initApp';


function App() {
  init();
  return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
  );
}

export default App;
