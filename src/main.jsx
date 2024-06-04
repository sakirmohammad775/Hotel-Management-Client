import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes';
import { ThemeProvider } from '@material-tailwind/react';
import { RoomProvider } from './Provider/RoomProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoomProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </RoomProvider>
  </React.StrictMode>,
)
