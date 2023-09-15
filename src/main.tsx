import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Header } from './components/Header.tsx'
import { SeccionUso } from './components/SeccionUso.tsx'
import { Footer } from './components/Footer.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <App />
    <SeccionUso />
    <Footer />
  </React.StrictMode>,
)
