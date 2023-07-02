import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import Home from './Routes/Home.jsx';
import IngSis from './Routes/IngSis.jsx';
import{createBrowserRouter, RouterProvider} from "react-router-dom";

const router= createBrowserRouter([
  {
    path: '/',
    element : <Home/>
  },
  {
    path: '/IngSis',
    element : <IngSis/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


