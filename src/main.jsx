import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root/Root.jsx';
import Home from './pages/Home/Home.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import MyEducation from './components/MyEducation/MYEducation.jsx';
import ProjectDetails from './components/ProjectDetails/ProjectDetails.jsx';
import Contact from './components/Contact/Contact.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/education',
        element: <MyEducation></MyEducation>
      },
      {
        path: '/details/:project_id',
        element: <ProjectDetails></ProjectDetails>,
        loader: ()=> fetch(`/project.json`)
      },
      {
        path: '/aboutMe',
        element: <AboutMe></AboutMe>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
     

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
