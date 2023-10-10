import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Header } from './components/Header.tsx'
import { Uso } from './components/Uso.tsx'
import { Footer } from './components/Footer.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <App />
    <Uso />
    <Footer />
  </React.StrictMode>,
)
