import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
//import DoctorContextProvider from './contexts/DoctorContext.jsx' // have to loook into this matter

createRoot(document.getElementById('root')).render(
  // wrap will provide support in our main project
  <BrowserRouter>
    {/* <DoctorContextProvider> */}
      <App />
    {/* </DoctorContextProvider> */}
  </BrowserRouter>,
)
