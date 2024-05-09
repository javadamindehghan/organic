import React, { Children, useRef } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
 import { Layout , Home ,Contact ,About } from "./pages";
export default function App() {
  const Router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
     children :[
      {
        index:true,
        element : <Home/>
      },
      {
       path:'Home',
        element : <Home/>
      },

      {
       path:'/About',
        element : <About/>
      },
      {
        path:'/Contact',
         element : <Contact/>
       }

     ]
    }
  ]);

  return <RouterProvider router={Router}/>

 
}
