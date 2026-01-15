import React from 'react';
import ReactDOM from 'react-dom/client';
import Abc from './Basic';
import Registorform from './Registor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Abc></Abc>
    <Registorform></Registorform>
  </React.StrictMode>
);
