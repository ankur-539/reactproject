import React from 'react';
import ReactDOM from 'react-dom/client';
// import Abc from './Basic';
import Registerform from './Register';
import './Style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Abc></Abc> */}
    <Registerform></Registerform>
  </React.StrictMode>
);
