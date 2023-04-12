import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Blog from './components/Blog/Blog'
import JobDetail from './components/JobDetail/JobDetail';
import Assingment from './components/Assingment/Assingment';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <App></App>,
      },
    
      {
        path: 'Statistics',
        element: <Assingment></Assingment>
      },
      
      {
        path: 'Blog',
        element: <Blog></Blog>
      },
      {
        path: 'home',
        element: <App></App>,
      },
      {
        path: 'ViewDetails/:id',
        element: <JobDetail></JobDetail>,
      },
          {
        path: '/AppliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        }


    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
