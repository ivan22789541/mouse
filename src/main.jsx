import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Auth from './Auth.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/reg",
        element: <Auth />,
    },
    {
        path: "/login",
        element: <Auth />,
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
