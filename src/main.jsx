import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import TopAttractions from './AttractionsSection/TopAttractions'
import AttractionCardCompo from './AttractionsSection/AttractionCardCompo'


const appRouter = createBrowserRouter([
  // place where we define what happens when load /path
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <TopAttractions />,
      },
      {
        path: '/attraction/:attractionId/',
        element: <AttractionCardCompo />,
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {appRouter}/>
)
