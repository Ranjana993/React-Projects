import React from 'react';
import ReactDOM from 'react-dom/client';
import AppA from './Components/ContextApi/AppA';
// import { UseReducer } from './Components/UseReducer/UseReducer';
// import { UseRef } from './Components/UseRef/UseRef';
// import { UseEffect } from './Components/useEffect2/UseEffect';
// import Main from './Components/UseEffect3/Main';
import './index.css';
// import App from './App';
// import { UseEffect } from './Components/useEffect/UseEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseEffect/> */}
    {/* <UseEffect/> */}
    {/* <Main/> */}
    {/* <UseRef/> */}
    {/* <UseReducer/> */}
    <AppA/>
  </React.StrictMode>
);
