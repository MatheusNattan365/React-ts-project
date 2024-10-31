import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Signup from './components/SignUp/Signup.tsx'
import Dashboard from './components/Dashboard/Dashboard.tsx'
import { AuthProvider } from './context/AuthProvider.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider >
     <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
