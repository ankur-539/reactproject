import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './apps/Welcome';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import './output.css'
import Userlogin from './apps/modules/users/auth/Userlogin';
import UserRegistor from './apps/modules/users/auth/UserRegistor';
import "./apps/assets/global.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Applandingpage from './apps/modules/dashboard/Applandingpage';
import Apperror from './apps/modules/sharecomponents/Apperror';
import Userdashboard from './apps/modules/dashboard/Userdashboard';
import Contact from './apps/modules/dashboard/Contact';
import Project from './apps/modules/dashboard/Project';
import Report from './apps/modules/dashboard/Report';
import Product from './apps/modules/dashboard/Product';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Welcome></Welcome>} />
        <Route path='usermanagement' element={<Userlogin></Userlogin>} />
        <Route path='usermanagement/signup' element={<UserRegistor></UserRegistor>} />
        <Route path='usermanagement/signup/login' element={<Userlogin></Userlogin>} />
        <Route path='usermanagement/dashboard' element={<Applandingpage></Applandingpage>}>
          <Route path='' element={<Userdashboard></Userdashboard>} />
          <Route path='contact' element={<Contact></Contact>} />
          <Route path='product' element={<Product></Product>} />
          <Route path='project' element={<Project></Project>} />
          <Route path='report' element={<Report></Report>} />

          <Route path='*' element={<Apperror />}></Route>
        </Route>

        <Route path='*' element={<Apperror />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
