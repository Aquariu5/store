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

import user from './models/user';
import basket from './models/basket';
import jwt_decode from 'jwt-decode';
import { getBasketById } from './api/apiBasket';
// async function init() {
//   if (localStorage.getItem('token')) {
//       user.setAuthTrue();
//       const token = localStorage.getItem('token')
//       const data: any = jwt_decode(token || '');
//       user.id = data.id;
//       user.email = data.email;
//       user.role = data.role;
//       const basketById = await getBasketById(user.id);
//       basket.setDevices(basketById.rows);
//       console.log('basketleninit', basket.devices.length);
//   }
// }

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
