import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from "react-toastify";
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Header/Header.css"

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
    <ToastContainer
    position='bottom-right'
    />
  </BrowserRouter>
)
