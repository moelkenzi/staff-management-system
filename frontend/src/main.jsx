import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HRMSSidebar from './Dashboard Component/sidebar.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <HRMSSidebar /> */}
    <App />
  </StrictMode>,
)
