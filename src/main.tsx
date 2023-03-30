import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes} from "react-router-dom";

import './index.css'

import App from './App'
import DropComponent from "./drop"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/drop" element={<DropComponent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
