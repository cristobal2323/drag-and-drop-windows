import React from 'react'
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import App from './App'
import DropComponent from "./drop"

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />
  },
  {
    path: "drop",
    element: <DropComponent />,
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
