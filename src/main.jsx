import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { Login } from './pages/auth/login.jsx'
import { Register } from './pages/auth/Register.jsx'
import { ForgotPassword } from './pages/auth/ForgotPassword.jsx'
import { ResetPassword } from './pages/auth/ResetPassword.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ForgotPassword /> */}
    <ResetPassword />
    {/* <Register /> */}
    {/* <Login /> */}
  </StrictMode>,
)
