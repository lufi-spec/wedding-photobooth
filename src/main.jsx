import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)