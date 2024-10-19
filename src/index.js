import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import "./index.css"
import Home from './views/Home/Home'

const root = createRoot(document.getElementById("root"));
const router = createBrowserRouter([
    {
    path:"/",
    element:<Home/>
},
])

root.render(<div>
<RouterProvider router={router} />
</div>)