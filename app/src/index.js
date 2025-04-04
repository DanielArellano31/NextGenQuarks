import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ModeloPred } from './modelo';
import { RegisterUser } from './Register';
import { Navbarrr } from './components/navbar';
import { Admin } from './dashboardAdmin';
import { ReportForm } from './ReportForm'
import { MechanicView } from "./dashboardMechanic"
import { OperatorView } from "./dashboardOperator"


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
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/Form",
    element: <ReportForm />,
  },
  {
    path: "/mechanic",
    element: <MechanicView />
  },
  {
    path: "/operator",
    element: <OperatorView />
  }

])
const user = localStorage.user ? JSON.parse(localStorage.user) : undefined



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      {
        user?.logined === true && (
          <Navbarrr />
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
