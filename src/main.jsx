import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import DonationDetails from './components/DonationDetails/DonationDetails';
import Pie_Chart from './components/Statistics/Pie_Chart';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donationDetails/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('donations.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch('donations.json')
      },
      {
        path: "/statistics",
        element: <Pie_Chart></Pie_Chart>,
        loader: () => fetch('donations.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
