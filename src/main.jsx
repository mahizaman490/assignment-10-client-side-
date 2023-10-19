import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';

import AddProduct from './components/AddProduct';
import MyCart from './components/MyCart';
import Product from './components/Product';
import Errorpage from './errorPagr/Errorpage';
import Register from './components/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <Errorpage></Errorpage>,
    children : [
      {
        path:'/',
        element:<Home></Home>,
        // loader: () => fetch('/data.json')

      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path:'/addproduct',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/mycart',
        element: <MyCart></MyCart>
      },
    
      {
        path:'/products/:id',
        element:<Product></Product>,
        // loader:()=>fetch('/data.json')
      }
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
