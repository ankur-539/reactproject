import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './apps/Welcome';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import './output.css'
import Userlogin from './apps/modules/users/auth/Userlogin';
import UserRegistor from './apps/modules/users/auth/UserRegistor';
import "./apps/assets/global.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Welcome></Welcome>} />
        <Route path='usermanagement' element={<Userlogin></Userlogin>} />
        <Route path='usermanagement/signup' element={<UserRegistor></UserRegistor>} />
        <Route path='usermanagement/signup/login' element={<Userlogin></Userlogin>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
