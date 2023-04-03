import React from 'react'
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import DragComponent from './drag'
import DropComponent from "./drop"

const router = createBrowserRouter([
  {
    path: "/",
    element:<DragComponent />
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
