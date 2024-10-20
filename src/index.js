import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import "./index.css"
import Home from './views/Home/Home'
import About from "./views/AboutUs/AboutUs"
import Contact from "./views/Contact/Contact"
import SignIn from "./views/SignIn/SignIn"
import LogIn from "./views/LogIn/LogIn"
import Store from "./views/Store/Store"

const root = createRoot(document.getElementById("root"));
const router = createBrowserRouter([
    {
    path:"/",
    element:<Home/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
        path:"/signin",
        element:<SignIn/>
    },
    {
        path:"/login",
        element:<LogIn/>
    },
    {
        path:"/store",
        element:<Store/>
    },

])

root.render(<div>
<RouterProvider router={router} />
</div>)