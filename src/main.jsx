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
import AuthProvider from './providers/AuthProvider';
import PrivateRoutes from './routes/PrivateRoutes';
import UpdateProduct from './components/UpdateProduct';
import SingleProductDetails from './components/SingleProductDetails';
import SingleBrandPage from './components/SingleBrandPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <Errorpage></Errorpage>,
    children : [
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('/data1.json')

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
        element:<PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
      },
      {
        path:'/updateproduct/:id',
        element:<PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`) 
      },
      {
        path:'/mycart',
        element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
      
      },
    
      {
        path:'/product',
        element:<Product></Product>,
        // loader:()=>fetch('/data.json')
      },
      {
        path:'/:brand',
        element:<SingleBrandPage></SingleBrandPage>,
        loader:({params})=>fetch(`http://localhost:5000/product/${params.brand}`) 
      },
      {
        path:'/singleProductDetails/:id',
        element:<PrivateRoutes><SingleProductDetails></SingleProductDetails></PrivateRoutes>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`) 
       
      }
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
 </React.StrictMode>,
)
