import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes';
import { ThemeProvider } from '@material-tailwind/react';
import { RoomProvider } from './Provider/RoomProvider';
import { AuthProvider } from './Provider/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RoomProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </RoomProvider>
    </AuthProvider>
  </React.StrictMode>,
)
