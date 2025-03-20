import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ModeloPred from './modelo';
import { RegisterUser } from './Register';
import Navbarrr from './components/navbar';
import footerr from './components/footer';
import { Navbar } from 'react-bootstrap';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/register",
    element: <RegisterUser />,
  },
  {
    path: "/modelo",
    element: <ModeloPred />,
  },  
  



])
const user = localStorage.user ? JSON.parse(localStorage.user) : undefined



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      {
        user?.logined === true && (
          <Navbar/>
        )
      }
      <RouterProvider router={router} />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
